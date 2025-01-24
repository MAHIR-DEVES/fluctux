import { NextAuthOptions, User as NextAuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import CredentialsProvider from "next-auth/providers/credentials";
import connDb from "@/lib/db.conn";
import User from "@/mongo/user/user.model";
import { JWT } from "next-auth/jwt";
import mongoose from "mongoose";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        identifier: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(
        credentials: Record<"identifier" | "password", string> | undefined
      ): Promise<NextAuthUser> {
        if (!credentials) {
          throw new Error("Invalid credentials");
        }

        try {
          await connDb();
          const user = await User.findOne({
            $or: [
              { email: credentials.identifier },
              { username: credentials.identifier },
            ],
          });
          if (!user) {
            throw new Error("Invalid credentials");
          }

          if (!user.isVerified) {
            throw new Error("Invalid user");
          }

          const passwordCorrect = await user.isPasswordCorrect(
            credentials.password
          );

          if (!passwordCorrect) {
            throw new Error("Invalid credentials");
          }

          const nextAuthUser: NextAuthUser = {
            _id: (user._id as mongoose.Types.ObjectId).toString(),
            email: user.email,
            image: user.avatar,
            name: user.name,
            role: user.role,
            username: user.username,
          };

          return nextAuthUser;
        } catch (error) {
          throw new Error("Something went wrong");
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (
        account?.provider === "github" ||
        account?.provider === "google" ||
        account?.provider === "discord"
      ) {
        await connDb();
        try {
          if (!(user.image || user.name || user.username || user.email)) {
            throw new Error("Invalid data");
          }

          const user_existed = await User.findOne({ email: user.email });

          if (!user_existed) {
            const newUser = new User({
              avatar: user.image,
              name: user.name,
              email: user.email,
              username: user.username,
              provider: account.provider,
              isVerified: true,
            });

            await newUser.save();

            const againUser = await User.findOne({ email: user.email });
            if (!againUser) {
              throw new Error("Something went wrong");
            }
            user._id =
              (againUser?._id as mongoose.Types.ObjectId).toString() || "";
          } else {
            if (user_existed.provider.toLowerCase() !== account.provider) {
              throw new Error("Email already exists with another provider");
            }
            user._id =
              (user_existed._id as mongoose.Types.ObjectId).toString() || "";
          }
        } catch (error) {
          throw new Error("Something went wrong");
        }
      }
      return true;
    },
    async jwt({ token, user }: { token: JWT; user: NextAuthUser }) {
      if (user) {
        token.username = user.username;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
        token.role = user.role;
        token._id = user._id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.name = token.name;
        session.user.image = token.image;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user._id = token._id;
      }
      return session;
    },
  },
  pages: {
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "none",
        secure: true, // ensure this is true in production
        path: "/",
      },
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days for token expiration
  },
  secret: process.env.AUTHJS_SECRET,
};
