const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

readdirSync("./routers").map((item, index) => {
  app.use("/api", require(`./routers/${item}`));
});
app.listen(5000, () => {
  console.log("http://localhost:5000/");
});
