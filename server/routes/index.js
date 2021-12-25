const router = require("express").Router();
const controller = require("../controllers/index");

router.get("/paymentlist", controller.PaymentList);
router.post("/addpayment", controller.addPayment);

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Welcome to MC PAYMENT, please check API Documentation",
  });
});

module.exports = router;
