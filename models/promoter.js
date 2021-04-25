var mongoose = require("mongoose");
const db = require("../db");

var promoterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

module.exports = db.model("Promoter", promoterSchema);
