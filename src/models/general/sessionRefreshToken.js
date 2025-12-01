import mongoose from "mongoose";

const RefreshTokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const SessionRefreshToken = mongoose.model(
  "SessionRefreshToken",
  RefreshTokenSchema
);

export default SessionRefreshToken;
