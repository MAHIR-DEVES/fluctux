import ApiError from "@/utils/ApiError";
import ApiResponse from "@/utils/ApiResponse";
import ArcjetHandler from "@/utils/ArcjetHandler";
import { NextRequest, NextResponse } from "next/server";

const arcjectHandler = new ArcjetHandler({
  VALIDATE_EMAIL: {
    enable: true,
    mode: "LIVE"
  },
});

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const decision = await arcjectHandler.protect(request, {
    email: email,
  });

  if (decision.isDenied()) {
    console.log(decision);
    
    return NextResponse.json(
      new ApiError(403, "Error in email", false, undefined , [decision.reason])
    );
  }

  return NextResponse.json(new ApiResponse(200, "Valid Email", true));
}
