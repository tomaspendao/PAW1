var mongoose = require('mongoose');
 
var promoterSchema = new mongoose.Schema({
    name: String,
    email: String
    
});

module.exports = mongoose.model('Promoter', promoterSchema);