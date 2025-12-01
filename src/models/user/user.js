import mongoose from "mongoose";

import { rolesEnum } from "../../constants/basic.js";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: false,
      default: "",
    },
    lastName: {
      type: String,
      required: false,
      default: "",
    },
    fullName: {
      type: String,
      required: false,
      default: "",
    },

    emailAddress: {
      type: String,
      required: false,
      default: "",
    },
    password: {
      type: String,
      required: false,
      default: "",
    },
    phoneNo: {
      type: String,
      required: false,
      default: "",
    },
    role: { type: String, enum: rolesEnum, required: false },

    profileImage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "File",
      required: false,
      default: null,
    },

    isActive: {
      type: Boolean,
      required: false,
      default: true,
    },

    fcmToken: {
      type: String,
      required: false,
      default: null,
    },
  },

  {
    timestamps: true,
    discriminatorKey: "role",
  }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
