const express = require("express");
const router = express.Router();
const Usercontroller = require("../http/controllers/User.controller");
const Membershipcontroller = require("../http/controllers/Membership.controller");
const Membership_subscription = require("../http/controllers/MembershipSubscrip.controller");
const Trainer = require("../http/controllers/Trainer.controller");

router.get("/user/list", Usercontroller.list);
router.get("/user/show", Usercontroller.show);
router.get("/member/list", Membershipcontroller.list);
router.get("/member/show", Membershipcontroller.show);
router.get("/membersubs/list", Membership_subscription.list);
router.get("/membersubs/show", Membership_subscription.show);
router.get("/trainer/list", Trainer.list);
router.get("/trainer/show", Trainer.show);

module.exports = router;
