const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String,Array } = Schema.Types;

const wsBoardObjectSchema = new Schema({
	grid: {
		type: String,
		required: true,
	},
	words: {
		type: Array,
		required: true,
	}
	
});
module.exports = new Model("WsBoardsObject", wsBoardObjectSchema);
