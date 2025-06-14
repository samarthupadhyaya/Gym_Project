const MembershipSubscription = require("../models/MemberSubscrip.model");

exports.list = async (data) => {
  return await MembershipSubscription.find();
};

exports.create = async (data) => {
  return await MembershipSubscription.create(data);
};

exports.show = async (data) => {
  return await MembershipSubscription.findById(data.membership_id);
};

exports.delete = async (data) => {
  return await MembershipSubscription.findByIdAndDelete(data.membership_id);
};

exports.update = async (data) => {
  return await MembershipSubscription.findByIdAndUpdate(data.membership_id, {
    subscription_id: data.subscription_id,
    plan_id: data.plan_id,
  });
};
