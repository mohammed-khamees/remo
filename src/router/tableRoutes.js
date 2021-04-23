const express = require('express');
const tableRouter = express.Router();
const {
	createHandler,
	getAllTablesHandler,
	getOneTablesHandler,
	updateTablesHandler,
	deleteTablesHandler,
} = require('../controller/userController');

module.exports = tableRouter;
