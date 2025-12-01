import { STATUS_CODE } from "../constants/response.js";
import ErrorResponse from "../utils/classes/errorResponse.js";

export const errorConverter = (err, req, res, next) => {
  let error = err;
  if (!(error instanceof ErrorResponse)) {
    error = new ErrorResponse(
      false,
      STATUS_CODE.SERVER_ERROR,
      STATUS_MESSAGES.ERROR,
      error.message,
      error
    );
  }
  next(error);
};

export const errorHandler = (err, req, res, next) => {
  let { statusCode, message } = err;

  res.locals.errorMessage = err.message;

  const response = {
    code: STATUS_CODE.SERVER_ERROR,
    error: err,
  };

  res.status(STATUS_CODE.SERVER_ERROR).json(err);
};
