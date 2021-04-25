var mongoose = require("mongoose");
var locationModel = require("./location");
const db = require("../db");

var eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  location: locationModel.schema,
  /*poster: {
    data: Buffer,
    contentType: String,
  },*/
  poster: String,
  //location: locationModel.schema
});

module.exports = db.model("Event", eventSchema);
