import { info, success, error, warning, debug } from "../../constants/index.js";

// Custom log functions

export const infoLog = (message = "", ...variables) => {
  console.log(info(`\n[INFO]: ${message}`), ...variables, "\n");
};
export const successLog = (message = "", ...variables) => {
  console.log(success(`[SUCCESS]: ${message}`), ...variables);
};
export const warningLog = (message = "", ...variables) => {
  console.log(warning(`[WARNING]: ${message}`), ...variables);
};
export const errorLog = (message = "", ...variables) => {
  console.log(error(`[ERROR]: ${message}`), ...variables);
};
export const debugLog = (message = "", ...variables) => {
  console.log(debug(`[DEBUG]: ${message}`), ...variables);
};
