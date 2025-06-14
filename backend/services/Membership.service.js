const Membership = require("../models/Membership.model");

exports.list = async (data) => {
  return await Membership.find();
};

exports.create = async (data) => {
  return await Membership.create(data);
};

exports.show = async (data) => {
  return await Membership.findById(data.member_id);
};

exports.delete = async (data) => {
  return await Membership.findByIdAndDelete(data.member_id);
};

exports.update = async (data) => {
  return await Membership.findByIdAndUpdate(data.member_id, {
    plan_name: data.plan_name,
    duration_months: data.duration_months,
    price: data.price,
    description: data.description,
  });
};
