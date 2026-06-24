const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    subject: {
      type: String,
      default: "",
    },

    message: {
      type: String,
      required: true,
    },

    source: {
      type: String,
      enum: ["Website", "WhatsApp", "Call", "WalkIn"],
      default: "Website",
    },

    status: {
      type: String,
      enum: ["New", "In Progress", "Resolved", "Closed"],
      default: "New",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    resolvedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Inquiry", inquirySchema);