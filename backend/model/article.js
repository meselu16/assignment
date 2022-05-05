const mongoose = require('mongoose'),
      path = require('path');


const article = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    id: {
        type: String, 
        required: true,
        unique: true,
    }
});

module.exports = mongoose.model('Article', article);