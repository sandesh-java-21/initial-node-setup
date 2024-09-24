export const STATUS_CODE = {
  CREATED: 201,
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  SERVER_ERROR: 500,
  NOT_FOUND: 404,
  ACCESS_DENIED: 403,
  CONFLICT: 409,
  PRECONDITION_REQUIRED: 428,
};

export const STATUS_MESSAGES = {
  SUCCESS: "Success",
  FAILED: "Failed",
  ERROR: "Error",
  SOMETHING_WENT_WRONG: "Something went wrong!",
  SERVER_ERROR: "Internal server error, Something went wrong!",
  CONFLICT: "Conflict",
  PRECONDITION_REQUIRED: "Request Failed",
};

export const SUCCESS_MESSAGES = {
  CREATED: (entity) => {
    return `${entity} created successfully`;
  },
  UPDATE: (entity) => {
    return `${entity} updated successfully`;
  },
  DELETE: (entity) => {
    return `${entity} deleted successfully`;
  },
  COMPLETE: "Completed Successfully",
  PASSWORD_RESET: "Your Password has been reset successfully",
  OPERATION_SUCCESSFULL: "Operation Successful",
  UPLOADED: "File uploaded successfully!",
  LOGIN_SUCCESS: "Credentials match, login successfull!",
  MESSAGE_SENT: "Message Sent!",
  OTP_SENT: "OTP sent successfully!",
  OTP_VERIFIED: "OTP verified successfully!",
  EMAIL_SENT: "Email sent successfully!",
};
