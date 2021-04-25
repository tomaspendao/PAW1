
var mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: {
        place: String,
        max: Number,
        limit: Number
    },
    poster: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('Event', eventSchema);