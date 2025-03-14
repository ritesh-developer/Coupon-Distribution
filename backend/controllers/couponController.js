const Coupon = require("../models/Coupon");

// ✅ Get all coupons
exports.getAllCoupons = async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// ✅ Claim a coupon
exports.claimCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findOne({ claimed: false });
    if (!coupon) return res.status(404).json({ message: "No coupons available" });

    coupon.claimed = true;
    await coupon.save();
    res.json({ message: "Coupon claimed successfully", coupon: coupon.code });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// ✅ Add a new coupon
exports.addCoupon = async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) return res.status(400).json({ message: "Coupon code is required" });

    const newCoupon = new Coupon({ code, claimed: false });
    await newCoupon.save();
    res.json({ message: "Coupon added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
