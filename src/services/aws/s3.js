import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import FileModel from "../../models/file.js";
import { errorLog, infoLog } from "../logger/consoleLogger.js";
import SuccessResponse from "../../utils/classes/successResponse.js";
import { SUCCESS_MESSAGES } from "../../constants/response.js";
import { allModelsDetails } from "../../models/allModels.js";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const uploadFileToS3 = async (
  folder,
  file,
  uploadedBy,
  acl = false
) => {};

export const deleteFileFromS3 = async (key) => {};

export function generatePresignedUrl(bucket, key) {}
