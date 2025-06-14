const express = require("express");
const router = express.Router();
const Usercontroller = require("../http/controllers/User.controller");
const Membershipcontroller = require("../http/controllers/Membership.controller");
const Membership_subscription = require("../http/controllers/MembershipSubscrip.controller");
const Trainer = require("../http/controllers/Trainer.controller");

router.get("/user/list", Usercontroller.list);
router.post("/user/create", Usercontroller.create);
router.get("/user/show/:user_id", Usercontroller.show);
router.put("/user/update/:user_id", Usercontroller.update);
router.delete("/user/delete/:user_id", Usercontroller.delete);

router.get("/member/list", Membershipcontroller.list);
router.post("/member/create", Membershipcontroller.create);
router.get("/member/show/:member_id", Membershipcontroller.show);
router.put("/member/update/:member_id", Membershipcontroller.update);
router.delete("/member/delete/:member_id", Membershipcontroller.delete);

router.get("/membersubs/list", Membership_subscription.list);
router.post("/membersubs/create", Membership_subscription.create);
router.get("/membersubs/show/:member_id", Membership_subscription.show);
router.put("/membersubs/update/:member_id", Membership_subscription.update);
router.delete("/membersubs/delete/:member_id", Membership_subscription.delete);

router.get("/trainer/list", Trainer.list);
router.post("/trainer/create", Trainer.create);
router.get("/trainer/show/:trainer_id", Trainer.show);
router.put("/trainer/update/:trainer_id", Trainer.update);
router.delete("/trainer/delete/:trainer_id", Trainer.delete);

module.exports = router;
