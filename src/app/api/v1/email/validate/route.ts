import ApiError from "@/utils/ApiError";
import ApiResponse from "@/utils/ApiResponse";
import ArcjetHandler from "@/utils/ArcjetHandler";
import { NextRequest, NextResponse } from "next/server";


const arcjectHandler = new ArcjetHandler({
  VALIDATE_EMAIL: true,
});

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  const decision = await arcjectHandler.protect(request, {
    email: email,
  });

  if (decision.isDenied()) {
    return NextResponse.json(
      new ApiError(403, "Invalid Email", false, `${decision.reason}`)
    );
  }

  return NextResponse.json(new ApiResponse(200, "Valid Email", true));
}
