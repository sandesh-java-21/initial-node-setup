import {
  STATUS_CODE,
  STATUS_MESSAGES,
  SUCCESS_MESSAGES,
} from "../../constants/response.js";
import { ERROR_MESSAGES } from "../../constants/errors.js";

class SuccessResponse {
  constructor(success, code, statusMessage, message, data) {
    this.success = success;
    this.statusCode = code;
    this.message = message;
    this.statusMessage = statusMessage;
    this.data = data;
  }

  static custom(success, statusMessage, code, message, data) {
    return new SuccessResponse(success, code, statusMessage, message, data);
  }

  static creational(message, data) {
    return new SuccessResponse(
      true,
      STATUS_CODE.CREATED,
      STATUS_MESSAGES.SUCCESS,
      message,
      data
    );
  }

  static operational(data) {
    return new SuccessResponse(
      true,
      STATUS_CODE.OK,
      STATUS_MESSAGES.SUCCESS,
      SUCCESS_MESSAGES.OPERATION_SUCCESSFULL,
      data
    );
  }
}

export default SuccessResponse;
