import arcjet, {
  ArcjetDecision,
  ArcjetNext,
  ArcjetNextRequest,
  detectBot,
  slidingWindow,
  validateEmail,
} from "@arcjet/next";

interface ArcjetHandlerConstructorType {
  SLIDING_WINDOW?: boolean;
  DETECT_BOT?: boolean;
  VALIDATE_EMAIL?: boolean;
}

class ArcjetHandler {
  private aj: ArcjetNext<{ email?: string }>;
  constructor({
    SLIDING_WINDOW = false,
    DETECT_BOT = false,
    VALIDATE_EMAIL = false,
  }: ArcjetHandlerConstructorType) {
    const rules: Exclude<
      ReturnType<
        typeof slidingWindow | typeof detectBot | typeof validateEmail
      >,
      false
    >[] = [
      SLIDING_WINDOW &&
        slidingWindow({
          mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
          interval: 300, // tracks requests across a 5min sliding window,
          max: 5, // allow a maximum of 10 requests
        }),
      DETECT_BOT &&
        detectBot({
          mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
          allow: [], // "allow none" will block all detected bots
        }),
      VALIDATE_EMAIL &&
        validateEmail({
          mode: "LIVE", // will block requests. Use "DRY_RUN" to log only
          // block disposable, invalid, and email addresses with no MX records
          block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
        }),
    ].filter(Boolean) as Exclude<
      ReturnType<
        typeof slidingWindow | typeof detectBot | typeof validateEmail
      >,
      false
    >[];

    this.aj = arcjet({
      key: process.env.ARCJET_KEY!,
      rules,
    });
  }

  async protect(
    req: ArcjetNextRequest,
    props?: { email: string }
  ): Promise<ArcjetDecision> {
    if(props) return await this.aj.protect(req, props);
    return await this.aj.protect(req, {});
  }

}

export default ArcjetHandler;
