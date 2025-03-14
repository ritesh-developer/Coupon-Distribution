const express = require("express");
const { claimCoupon, addCoupon, getAllCoupons } = require("../controllers/couponController"); // ✅ Import functions

const router = express.Router();

router.get("/", getAllCoupons);  // ✅ GET all coupons
router.post("/claim", claimCoupon);  // ✅ Claim a coupon
router.post("/add", addCoupon);  // ✅ Add a new coupon

module.exports = router;
