const trainer = require("../models/Trainer.model");

exports.list = async (data) => {
  return await trainer.find();
};

exports.create = async (data) => {
  return await trainer.create(data);
};

exports.show = async (data) => {
  return await trainer.findById(data.trainer_id);
};

exports.delete = async (data) => {
  return await trainer.findByIdAndDelete(data.trainer_id);
};

exports.update = async (data) => {
  return await trainer.findByIdAndUpdate(data.trainer_id, {
    specialisation: data.specialisation,
    available_days: data.available_days,
  });
};
