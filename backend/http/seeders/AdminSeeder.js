const User = require("../../models/Usertable.model");
var user = {
  name: "Admin User",
  email: "admin@gmail.com",
  password: "12345678",
  role: "admin",
  phone: "1234567890",
  user_type: "admin",
};

User.create(user);
