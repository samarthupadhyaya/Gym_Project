const Membershipservices = require("../../services/Membership.service");

exports.list = async (req, res) => {
  try {
    const member = Membershipservices.list(req.body);
    res.json({ data: member }, 200);
  } catch (err) {}
};

exports.create = async (req, res) => {
  try {
    const member = Membershipservices.create(req.body);
    res.json({ data: member }, 200);
  } catch (err) {}
};

exports.show = async (req, res) => {
  try {
    const member = Membershipservices.show(req.body);
    res.json({ data: member }, 200);
  } catch (err) {}
};

exports.delete = async (req, res) => {
  try {
    const member = Membershipservices.delete(req.body);
    res.json({ data: member }, 200);
  } catch (err) {}
};

exports.update = async (req, res) => {
  try {
    const member = Membershipservices.update(req.body);
    res.json({ data: member }, 200);
  } catch (err) {}
};
