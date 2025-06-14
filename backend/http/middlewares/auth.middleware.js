const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.header["Authorisation"];
  if (!token) {
    res.json({ error: "access denied" });
  }
  try {
    const decode = jwt.verify(token.replace("Bearer", ""), process.env.JWT_KEY);
    req.user = decode;
    next();
  } catch (err) {
    res.json({ error: err.message });
  }
};
