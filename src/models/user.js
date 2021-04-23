'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let users = new Schema({
	name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('users', users);
