export const ACCOUNT_STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
};

export const ENVIRONMENTS = {
  DEVELOPMENT: "DEVELOPMENT",
  PRODUCTION: "PRODUCTION",
};

export const roles = {
  SUPER_ADMIN: "SUPER_ADMIN",
  SUB_ADMIN: "SUB_ADMIN",
  CUSTOMER: "CUSTOMER",
};

export const rolesEnum = [roles.CUSTOMER, roles.SUB_ADMIN, roles.SUPER_ADMIN];

export const CACHE_EXPIRY = {
  ONE_DAY: 24 * 60 * 60, // 24 hours
  HALF_DAY: 12 * 60 * 60, // 12 hours
  SIX_HOURS: 6 * 60 * 60, // 6 hours
  TWO_HOURS: 2 * 60 * 60, // 2 hours
  ONE_HOUR: 60 * 60, // 1 hour
  HALF_HOUR: 30 * 60, // 30 minutes
  FIFTEEN_MINUTES: 15 * 60, // 15 minutes
  FIVE_MINUTES: 5 * 60, // 5 minutes
  ONE_MINUTE: 60, // 1 minute
};

export const WORK_SPACES = {
  REMOTE: "REMOTE",
  ON_SITE: "ON_SITE",
};

export const s3FolderNames = {
  PROFILE_IMAGES: "profile-images",
  ASSETS_ICONS: "assets/icons",
};

export const otpTypes = {
  RESET_ACCOUNT_PASSWORD: "RESET_ACCOUNT_PASSWORD",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  CUSTOMER_ACCOUNT_VERIFICATION: "CUSTOMER_ACCOUNT_VERIFICATION",
  CUSTOMER_LOGIN: "CUSTOMER_LOGIN",
};

export const otpTypesEnum = [
  otpTypes.FORGOT_PASSWORD,
  otpTypes.RESET_ACCOUNT_PASSWORD,
  otpTypes.CUSTOMER_ACCOUNT_VERIFICATION,
  otpTypes.CUSTOMER_LOGIN,
];
