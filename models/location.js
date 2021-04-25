var mongoose = require("mongoose");
const db = require("../db");

var locationSchema = new mongoose.Schema({
  place: { type: String },
  max: { type: Number },
  limit: { type: Number },
});
module.exports = db.model("Location", locationSchema);
