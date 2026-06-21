import mongoose, { Document } from "mongoose";

type VideoKycStatus =
  | "not_required"
  | "pending"
  | "in_progress"
  | "approved"
  | "rejected";

export interface Iuser extends Document {
  name: string;
  email: string;
  role: "user" | "partner" | "admin";
  isEmailVerified?: boolean;
  otp?: string;
  otpExpiresAt?: Date;
  password: string;
  partnerOnBoardingSteps: number;
  mobileNumber?: string;
  rejectionReason?: string;
  videoKycStatus: VideoKycStatus;
  videoKycRoomId: string;
  videoKycRejectionReason: string;
  createdAt: Date;
  updatedAt: Date;
  partnerStatus: "approved" | "pending" | "rejected";
}

const userSchema = new mongoose.Schema<Iuser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "partner", "admin"],
    },
    password: {
      type: String,
    },
    partnerStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    rejectionReason: {
      type: String,
    },
    videoKycStatus: {
      type: String,
      enum: ["not_required", "pending", "in_progress", "approved", "rejected"],
      default: "not_required",
    },
    videoKycRoomId: {
      type: String,
    },
    videoKycRejectionReason: {
      type: String,
    },

    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    mobileNumber: {
      type: String,
    },
    partnerOnBoardingSteps: {
      type: Number,
      min: 0,
      max: 8,
      default: 0,
    },

    otp: {
      type: String,
    },
    otpExpiresAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
