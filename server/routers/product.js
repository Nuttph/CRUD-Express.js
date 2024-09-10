const express = require("express");
const router = express.Router();

router.get("/product", (req, res) => {
  res.send("<div>Hello Product Get</div>");
});
router.get("/product/:productID", (req, res) => {
  const { productID } = req.params;
  res.send("Hello " + productID);
});
router.post("/product", (req, res) => {
  res.send("Hello post");
});
router.put("/product/:productID", (req, res) => {
  const { productID } = req.params;
  res.send("Hello put " + productID);
});
router.delete("/product/:productID", (req, res) => {
  const { productID } = req.params;
  res.send("Hello delete " + productID);
});

module.exports = router;
