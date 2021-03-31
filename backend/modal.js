const mongoose = require("mongoose");

const formschema = new mongoose.Schema({
  number: {
    type: Number,
  },
  password: {
    type: String,
  },
});
const modaldata = mongoose.model("userdata", formschema);
module.exports = modaldata;
