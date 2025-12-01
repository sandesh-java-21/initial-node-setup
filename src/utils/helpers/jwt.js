import jwt from "jsonwebtoken";
import SessionRefreshToken from "../../models/general/sessionRefreshToken";

export const generateAuthenticationToken = async (payload) => {
  const secretKey = process.env.JWT_SECRET;

  const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });

  return token;
};

export const generateAuthRefreshToken = async (payload, userId) => {
  const secretKey = process.env.JWT_REFRESH_TOKEN_SECRET;

  const token = jwt.sign(payload, secretKey, { expiresIn: "7d" });

  await SessionRefreshToken.create({
    user: userId,
    token: token,
    // expiresAt: new Date(Date.now() + 1 * 60 * 1000),

    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  });

  return token;
};
