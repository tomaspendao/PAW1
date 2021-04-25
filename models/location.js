var mongoose = require("mongoose");
var locationSchema = new mongoose.Schema({
  place: {type: String},
  max: {type: Number},
  limit: {type: Number},
});
module.exports = mongoose.model("Location", locationSchema);
