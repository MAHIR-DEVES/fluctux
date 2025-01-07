import { NextAuthOptions, User as NextAuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import DiscordProvider from "next-auth/providers/discord";
import connDb from "@/lib/db.conn";
import User from "@/mongo/user/user.model";
import { JWT } from "next-auth/jwt";
import mongoose from "mongoose";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
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
          const user_existed = await User.findOne({ email: user.email });

          if (!(user.image || user.name || user.username || user.email)) {
            throw new Error("Something went wrong invalid data");
          }

          if (!user_existed) {
            const newUser = new User({
              avatar: user.image,
              name: user.name,
              email: user.email,
              username: user.username,
              provider: account.provider,
              isVerified: true,
            });

            await newUser.save({
              validateBeforeSave: true,
            });

            const againUser = await User.findOne({ email: user.email });
            if (!againUser) {
              throw new Error("Something went wrong");
            }
            user._id =
              (againUser?._id as mongoose.Types.ObjectId).toString() || "";
          } else {
            if (user_existed.provider !== account.provider) {
              throw new Error("Email already exists with another provider");
            }

            user_existed.avatar = user.image || "";
            user_existed.name = user.name || "";
            user_existed.username = user.username || "";
            await user_existed.save();
            user._id =
              (user_existed._id as mongoose.Types.ObjectId).toString() || "";
          }

          user.username =
            user.username ||
            user.email
              ?.split("@")[0]
              .replace(/[^a-zA-Z0-9]/g, "")
              .trim();

          user.role = "USER";
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
    async session({ session, user, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.name = token.name;
        session.user.image = token.image;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user._id = token._id;
      }
      return session;
    }
  },
  pages: {
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days for token expiration
  },
  secret: process.env.AUTHJS_SECRET,
};
