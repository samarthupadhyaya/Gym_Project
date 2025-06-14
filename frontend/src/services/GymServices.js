import { BACK_BASE_URL } from "../utils";

const GymServices = {};

GymServices.getProfile = () => {
  return fetch(`${BACK_BASE_URL}/gym/profile`);
};

GymServices.update = () => {};

GymServices.listGym = () => {};

GymServices.addGym = () => {};

GymServices.updateGym = () => {};

GymServices.deleteGym = () => {};

export default GymServices;
