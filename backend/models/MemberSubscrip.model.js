const mongoose = require("mongoose");

const MemberSubscription = mongoose.Schema(
  {
    subscription_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      unique: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    plan_id: {
      type: String,
      require: true,
    },
    start_date: {
      type: Date,
      require: true,
    },
    end_date: {
      type: Date,
      require: true,
    },
    payment_status: {
      type: String,
      enum: ["paid", "unpaid", "pending"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MembershipSubscription", MemberSubscription);
