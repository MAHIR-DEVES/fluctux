export enum ErrorCodes {
  "INTERNAL_SERVER_ERROR" = "INTERNAL_SERVER_ERROR",
  "UNAUTHORIZED_USER" = "UNAUTHORIZED_USER",
  "INVITATION_NOT_FOUND" = "INVITATION_NOT_FOUND",
  "USER_NOT_FOUND" = "USER_NOT_FOUND",
  "INVALID_REQUEST" = "INVALID_REQUEST",
  "NOT_ACCEPTABLE" = "NOT_ACCEPTABLE",
}

export enum HTTPErrorCodes {
  "BAD_REQUEST" = 400,
  "UNAUTHORIZED" = 401,
  "PAYMENT_REQUIRED" = 402,
  "FORBIDDEN" = 403,
  "NOT_FOUND" = 404,
  "METHOD_NOT_ALLOWED" = 405,
  "NOT_ACCEPTABLE" = 406,
  "PROXY_AUTHENTICATION_REQUIRED" = 407,
  "REQUEST_TIMEOUT" = 408,
  "CONFLICT" = 409,
  "GONE" = 410,
  "LENGTH_REQUIRED" = 411,
  "PRECONDITION_FAILED" = 412,
  "PAYLOAD_TOO_LARGE" = 413,
  "URI_TOO_LONG" = 414,
  "UNSUPPORTED_MEDIA_TYPE" = 415,
  "RANGE_NOT_SATISFIABLE" = 416,
  "EXPECTATION_FAILED" = 417,
  "IM_A_TEAPOT" = 418,
  "MISDIRECTED_REQUEST" = 421,
  "UNPROCESSABLE_ENTITY" = 422,
  "LOCKED" = 423,
  "FAILED_DEPENDENCY" = 424,
  "TOO_EARLY" = 425,
  "UPGRADE_REQUIRED" = 426,
  "PRECONDITION_REQUIRED" = 428,
  "TOO_MANY_REQUESTS" = 429,
  "REQUEST_HEADER_FIELDS_TOO_LARGE" = 431,
  "UNAVAILABLE_FOR_LEGAL_REASONS" = 451,
  "INTERNAL_SERVER_ERROR" = 500,
  "NOT_IMPLEMENTED" = 501,
  "BAD_GATEWAY" = 502,
  "SERVICE_UNAVAILABLE" = 503,
  "GATEWAY_TIMEOUT" = 504,
  "HTTP_VERSION_NOT_SUPPORTED" = 505,
  "VARIANT_ALSO_NEGOTIATES" = 506,
  "INSUFFICIENT_STORAGE" = 507,
  "LOOP_DETECTED" = 508,
  "NOT_EXTENDED" = 510,
  "NETWORK_AUTHENTICATION_REQUIRED" = 511,
}

export const ERROR: {
  [key in ErrorCodes]: {
    title: string;
    message: string;
    statusCode: number;
  };
} = {
  [ErrorCodes.INTERNAL_SERVER_ERROR]: {
    title: "Something went wrong",
    message:
      "There might be a technical issue. We are working on resolving it. Please try again later.",
    statusCode: HTTPErrorCodes.INTERNAL_SERVER_ERROR,
  },
  [ErrorCodes.UNAUTHORIZED_USER]: {
    title: "Unauthorized Access",
    message:
      "You do not have the necessary permissions to access this resource.",
    statusCode: HTTPErrorCodes.UNAUTHORIZED,
  },
  [ErrorCodes.INVITATION_NOT_FOUND]: {
    title: "Invitation Not Found",
    message: "The invitation you are looking for does not exist.",
    statusCode: HTTPErrorCodes.NOT_FOUND,
  },
  [ErrorCodes.USER_NOT_FOUND]: {
    title: "User Not Found",
    message: "The user you are looking for does not exist.",
    statusCode: HTTPErrorCodes.NOT_FOUND,
  },
  [ErrorCodes.INVALID_REQUEST]: {
    title: "Invalid Request",
    message: "The request made is invalid.",
    statusCode: HTTPErrorCodes.BAD_REQUEST,
  },
  [ErrorCodes.NOT_ACCEPTABLE]: {
    title: "Not Acceptable",
    message: "The request made is not acceptable.",
    statusCode: HTTPErrorCodes.NOT_ACCEPTABLE,
  },
};
