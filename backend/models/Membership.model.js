const mongoose = require("mongoose");

const Membership = mongoose.Schema({
  plan_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  plan_name: {
    type: String,
    required: true,
  },
  duration_months: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Membership", Membership);
