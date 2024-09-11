const express = require("express");
const router = express.Router();
const { create, list, read } = require("../controllers/product");

router.get("/product", list);
router.get("/product/:productID", read);
router.post("/product", create);
router.put("/product/:productID", (req, res) => {
  const { productID } = req.params;
  res.send("Hello put " + productID);
});
router.delete("/product/:productID", (req, res) => {
  const { productID } = req.params;
  res.send("Hello delete " + productID);
});

module.exports = router;
