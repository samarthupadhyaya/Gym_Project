const User = require("../models/Usertable.model");

exports.list = async (data) => {
  return await User.find();
};

exports.create = async (data) => {
  return await User.create(data);
};

exports.show = async (data) => {
  return await User.findById(data.user_id);
};

exports.delete = async (data) => {
  return await User.findByIdAndDelete(data.user_id);
};

exports.update = async (data) => {
  return await User.findByIdAndUpdate(data.user_id, {
    name: data.name,
    email: data.email,
    password: data.password,
    phone: data.phone,
  });
};
