const express = require("express");
const parser = require("body-parser");
require("dotenv").config();
require("./database");
const port = process.env.port;
const cors = require("cors");
const { parse } = require("dotenv");
const app = express();
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
const modaldata = require("./modal");
app.get("/", (req, res) => {
  modaldata.find().then((r) => res.send(r));
});
app.post("/data", (req, res) => {
  const data = {
    number: req.body.number,
    password: req.body.password,
  };
  const userdata = new modaldata(data);
  userdata.save();
  res.send("updated");
});
app.listen(port, () => {
  console.log(`port running on ${port}`);
});
