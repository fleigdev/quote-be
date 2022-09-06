const mongoose = require('mongoose');

const QuoteScema = new mongoose.Schema({
    content: String,
    author: String
});

module.exports = mongoose.model('Quote', QuoteScema);