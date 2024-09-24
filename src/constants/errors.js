export const ERROR_MESSAGES = {
  UNIQUE_EMAIL: "Email address should be unique",
  INVALID_PASSWORD:
    "Password must contain at least 8 characters, including uppercase lowercase and special characters",
  EMAIL_REQUIRED: "Email address is required",
  PASSWORD_REQUIRED: "Password is required",
  UNAUTHORIZE: "You are not authorize to perform this action",
  INVALID_LOGIN_CREDENTIALS: "Email or Password is Incorrect",
  INVALID_EMAIL: `Please enter valid email`,
  NOT_FOUND: "Not Found",
  EMPTY_REQUIRED_FIELDS: "Required fields are empty.",
  INVALID_DATA: "Invalid data received.",
  ENTITY_ALREADY_EXISTS: (userType) => {
    return `${userType} already exists with the provided email address`;
  },
  ENTITY_ALREADY_EXISTS_WITH_NAME: (userType) => {
    return `${userType} already exists with the provided full name`;
  },
  ENDPOINT_ACCESS_DENIED: (userType) => {
    return `Forbidden! only ${userType}s are allowed.`;
  },

  FORBIDDEN_FILE_ACCESS: "Forbidden! You do not have access to file.",
};

export const UNAUTHORIZE_MESSAGES = {
  NOT_LOGGED_IN: `You are not logged in please login to get access`,
  OTP_EXPIRED: "OTP is expired.",
  INVALID_JWT: `Invalid token! please login again`,
  EXPIRED_JWT: `Your token has expired! please login again`,
  INVALID_EXPIRED: `Token is invalid or has been Expired`,
  INACTIVE_ACCOUNT: "Your account is deactivated, please contact your admin.",
  BANNED:
    "You have violated our Privacy Policy & Terms. For Further Information please contact our Customer Support Center.",
  LOGIN_SUCCESS_BUT_SECURITY_ENABLED:
    "Credentials match but, OTP security is enabled.",
};
