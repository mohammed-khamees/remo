'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Table = new Schema({
	name: { type: String, required: true },
});

module.exports = mongoose.model('tables', Table);
