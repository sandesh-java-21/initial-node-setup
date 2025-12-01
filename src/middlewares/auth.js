import {
  STATUS_CODE,
  STATUS_MESSAGES,
  UNAUTHORIZE_MESSAGES,
} from "../constants/index.js";
import ErrorResponse from "../utils/classes/errorResponse.js";
import jwt from "jsonwebtoken";
import User from "../models/user/user.js";

export const authenticateUser = async (req, res, next) => {};

export const validateRoles = (rolesArray) => {};
