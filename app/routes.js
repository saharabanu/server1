const router = require("express").Router();
const productRouter = require("../router/productRouter");
const app = require("./app");

router.get("/health", (req, res) => {
  res.status(200).json({ message: "success" });
});
router.use("/api/v1/product", productRouter);

module.exports = router;
