// This example is for NextAuth 4, the current stable version
import arcjet, { detectBot, slidingWindow } from "@arcjet/next";
import NextAuth from "next-auth";
import { authOptions } from "./options";

const handler = NextAuth(authOptions);

const aj = arcjet({
  key: process.env.ARCJET_KEY!,
  rules: [
    slidingWindow({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      interval: 300, // tracks requests across a 5min sliding window,
      max: 5, // allow a maximum of 10 requests
    }),
    detectBot({
      mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
      allow: [], // "allow none" will block all detected bots
    }),
  ],
});

type RouteContext = {
  params: Promise<Record<string, string>>;
};

const ajProtectedPOST = async (req: Request, context: RouteContext) => {
  // Protect with Arcjet
  const decision = await aj.protect(req);
  console.log("Arcjet decision", decision);

  if (decision.ip.isVpn() || decision.ip.isProxy()) {
    throw new Error("Access denied due to VPN, proxy usage.");
  }

  if (decision.ip.isRelay()) {
    if (decision.ip.hasService()) {
      if (decision.ip.service === "Apple Private Relay") {
        // We trust Apple Private Relay because it requires an active iCloud
        // subscription, so we can allow it
      } else {
        throw new Error("Access denied due to relay usage.");
      }
    } else {
      throw new Error("Access denied. Unverified network detected.");
    }
  }

  if (decision.isDenied()) {
    if (decision.reason.isRateLimit()) {
      throw new Error("Too Many Requests");
    } else {
      throw new Error("Unauthorized");
    }
  }

  // Then call the original handler
  return handler(req, context);
};

export { handler as GET, ajProtectedPOST as POST };
