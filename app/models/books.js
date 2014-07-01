var mongoose = require("mongoose");

var bookSchema = new mongoose.Schema({
	title : String,
	isbn : String,
	description: String
});

module.exports = mongoose.model('book',bookSchema);
