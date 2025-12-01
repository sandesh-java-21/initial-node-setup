import mongoose from "mongoose";
import { otpTypesEnum } from "../../constants/basic";

const otpSchema = new mongoose.Schema({
  otpCode: { type: String, required: true },

  emailAddress: {
    type: String,
    required: false,
    default: null,
  },
  phoneNo: {
    type: String,
    required: false,
    default: null,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    default: null,
    required: false,
  },
  type: {
    type: String,
    enum: otpTypesEnum,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  expiryAt: {
    type: Date,
    default: () => new Date(Date.now() + 1 * 120 * 1000),
  },
});

otpSchema.index({ expiryAt: 1 }, { expireAfterSeconds: 120 });

const otpModel = mongoose.model("Otp", otpSchema);

export default otpModel;
