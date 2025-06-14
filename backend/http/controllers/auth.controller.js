const jwt = require("jsonwebtoken");
const User = require("../../models/Usertable.model");
const bcrypt = require("bcryptjs");

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      res.json({ error: "email does not exist" });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) {
      res.json({ error: "wrong password" });
    }
    const token = jwt.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
        user_type: user.user_type,
      },
      process.env.JWT_KEY
    );
    res.json({ token: token });
  } catch (err) {
    res.json({ error: err.message });
  }
};
