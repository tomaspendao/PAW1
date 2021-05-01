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
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
    required: true
  },
  poster: String,
});

module.exports = db.model("Event", eventSchema);