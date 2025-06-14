const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const UsertableSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    user_type: {
      type: String,
      default: "user",
    },
    role: {
      type: String,
      required: true,
    },
  },
  { created_at: Date.now() }
);

UsertableSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model("User", UsertableSchema);
