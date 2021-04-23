const express = require('express');
const userRouter = express.Router();
const {
	createHandler,
	getAllUsersHandler,
	getOneUsersHandler,
	updateUsersHandler,
	deleteUsersHandler,
} = require('../controller/userController');

module.exports = userRouter;
