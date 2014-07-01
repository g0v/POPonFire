var mongoose = require("mongoose");

var newsSchema = new mongoose.Schema({
	title : String,
	description: String
});

module.exports = mongoose.model('news',newsSchema);
