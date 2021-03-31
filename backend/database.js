const mongoose = require("mongoose");
const mongourl = "mongodb://localhost:27017/magitt";
mongoose.connect(
  mongourl,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongodb connection success");
  }
);
module.exports = mongoose;
