import arcjet, {
  ArcjetBotCategory,
  ArcjetDecision,
  ArcjetEmailType,
  ArcjetMode,
  ArcjetNext,
  ArcjetNextRequest,
  ArcjetWellKnownBot,
  detectBot,
  slidingWindow,
  validateEmail,
} from "@arcjet/next";

interface SLIDING_WINDOW_Type {
  enable: boolean;
  mode?: ArcjetMode;
  interval?: number;
  max?: number;
}

interface DETECT_BOT_Type {
  enable: boolean;
  mode?: ArcjetMode;
  allow?: ArcjetWellKnownBot[] | ArcjetBotCategory[];
}

interface VALIDATE_EMAIL_Type {
  enable: boolean;
  mode?: ArcjetMode;
  block?: ArcjetEmailType[];
}

interface ArcjetHandlerConstructorType {
  SLIDING_WINDOW?: SLIDING_WINDOW_Type;
  DETECT_BOT?: DETECT_BOT_Type;
  VALIDATE_EMAIL?: VALIDATE_EMAIL_Type;
}

class ArcjetHandler {
  private aj: ArcjetNext<{ email?: string }>;
  constructor({
    SLIDING_WINDOW = {
      enable: false,
      mode: "DRY_RUN", // "DRY_RUN" to log only. use "LIVE" to block request
      interval: 300,
      max: 5,
    },
    DETECT_BOT = {
      enable: false,
      mode: "DRY_RUN", // "DRY_RUN" to log only. use "LIVE" to block request
      allow: [], // "[] allow none" will block all detected bots
    },
    VALIDATE_EMAIL = {
      enable: false,
      mode: "DRY_RUN", // "DRY_RUN" to log only. use "LIVE" to block request
      block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"],
    },
  }: ArcjetHandlerConstructorType) {
    const rules: Exclude<
      ReturnType<
        typeof slidingWindow | typeof detectBot | typeof validateEmail
      >,
      false
    >[] = [
      SLIDING_WINDOW.enable &&
        slidingWindow({
          mode: SLIDING_WINDOW.mode,
          interval: SLIDING_WINDOW?.interval || 300,
          max: SLIDING_WINDOW.max!,
        }),
      DETECT_BOT.enable &&
        detectBot({
          mode: DETECT_BOT.mode,
          allow: DETECT_BOT.allow || [], // "[] allow none" will block all detected bots
        }),
      VALIDATE_EMAIL.enable &&
        validateEmail({
          mode: VALIDATE_EMAIL.mode, // will block requests. Use "DRY_RUN" to log only
          block: ["DISPOSABLE", "INVALID", "NO_MX_RECORDS"], // block disposable, invalid, and email addresses with no MX records
        }),
    ].filter(Boolean) as Exclude<
      ReturnType<
        typeof slidingWindow | typeof detectBot | typeof validateEmail
      >,
      false
    >[];

    // Initialized Arcjet with the defined rules
    this.aj = arcjet({
      key: process.env.ARCJET_KEY!,
      rules,
    });
  }

  async protect(
    req: ArcjetNextRequest,
    props?: { email?: string }
  ): Promise<ArcjetDecision> {
    if (props) return await this.aj.protect(req, props); // If props is provided, pass it to Arcjet
    return await this.aj.protect(req, {}); // Otherwise, call protect without additional props
  }
}

export default ArcjetHandler;
