import { ENVIRONMENTS } from "../constants/basic.js";
import { ERROR_MESSAGES } from "../constants/errors.js";
import {
  STATUS_CODE,
  STATUS_MESSAGES,
  SUCCESS_MESSAGES,
} from "../constants/response.js";
import SuccessResponse from "./classes/successResponse.js";

export const getCurrentRunningEnvironment = () => {
  return process.env.NODE_ENV === ENVIRONMENTS.DEVELOPMENT
    ? ENVIRONMENTS.DEVELOPMENT
    : ENVIRONMENTS.PRODUCTION;
};

export const validateRequiredFields = (body, requiredFields) => {
  return new Promise((resolve, reject) => {
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      resolve(
        SuccessResponse.successResponse(
          false,
          STATUS_MESSAGES.ERROR,
          STATUS_CODE.BAD_REQUEST,
          ERROR_MESSAGES.EMPTY_REQUIRED_FIELDS,
          { missingFields }
        )
      );
    } else {
      resolve(
        SuccessResponse.successResponse(
          true,
          STATUS_MESSAGES.SUCCESS,
          STATUS_CODE.OK,
          SUCCESS_MESSAGES.OPERATION_SUCCESSFULL,
          null
        )
      );
    }
  });
};
