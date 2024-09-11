const express = require("express");
const router = express.Router();
const {
  create,
  list,
  read,
  update,
  remove,
} = require("../controllers/product");

router.get("/product", list);
router.get("/product/:productID", read);
router.post("/product", create);
router.put("/product/:productID", update);
router.delete("/product/:productID", remove);

module.exports = router;
