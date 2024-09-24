import {
  STATUS_CODE,
  STATUS_MESSAGES,
  SUCCESS_MESSAGES,
} from "../../constants/response.js";
import { ERROR_MESSAGES } from "../../constants/errors.js";
import { getCurrentRunningEnvironment } from "../basic.js";
import { ENVIRONMENTS } from "../../constants/basic.js";

class ErrorResponse {
  constructor(success, statusCode, statusMessage, message, error) {
    this.success = success;
    this.message = message;
    this.statusCode = statusCode;
    this.statusMessage = statusMessage;
    if (error) {
      if (getCurrentRunningEnvironment() === ENVIRONMENTS.DEVELOPMENT) {
        this.error = {
          message: error.message,
          stack: error.stack,
        };
      } else {
        this.error = {
          message: error.message,
        };
      }
    }
  }

  static badRequest(message) {
    return new ErrorResponse(
      false,
      STATUS_CODE.BAD_REQUEST,
      STATUS_MESSAGES.FAILED,
      message
    );
  }
  static internal(error) {
    return new ErrorResponse(
      false,
      STATUS_CODE.SERVER_ERROR,
      STATUS_MESSAGES.SERVER_ERROR,
      STATUS_MESSAGES.SOMETHING_WENT_WRONG,
      error
    );
  }
  static notFound(message) {
    return new ErrorResponse(
      false,
      STATUS_CODE.NOT_FOUND,
      STATUS_MESSAGES.FAILED,
      message
    );
  }

  static customError(statusMessage, code, message, data) {
    return new ErrorResponse(false, code, statusMessage, message, data);
  }
}

export default ErrorResponse;
