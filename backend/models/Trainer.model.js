const mongoose = require("mongoose");

const Trainer = mongoose.Schema({
  trainer_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  specialization: {
    type: String,
    require: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  available_days: {
    type: String,
    enum: ["Monday", "Wednesday"],
    required: true,
  },
});

module.exports = mongoose.model("Trainer", Trainer);
