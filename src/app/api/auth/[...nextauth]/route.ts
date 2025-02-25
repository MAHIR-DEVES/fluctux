// This example is for NextAuth 4, the current stable version
import NextAuth from "next-auth";
import { authOptions } from "./options";
import ArcjetHandler from "@/utils/ArcjetHandler";

const handler = NextAuth(authOptions);

type RouteContext = {
  params: Promise<Record<string, string>>;
};

const arcjetHandler = new ArcjetHandler({
  SLIDING_WINDOW: {
    enable: true,
    mode: "LIVE"
  },
  DETECT_BOT: {
    enable: true,
    mode: "LIVE",
  },
})

const ajProtectedPOST = async (req: Request, context: RouteContext) => {
  // Protect with Arcjet
  const decision = await arcjetHandler.protect(req)
  
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
