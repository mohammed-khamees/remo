'use strict';

//database

const Users = require('./../models/dataCollection');
const usersModel = require('./../models/user');
const users = new Users(usersModel);

async function createHandler(req, res) {
	const usersObject = req.body;
	try {
		const resObj = await users.create(usersObject);
		res.status(201).json(resObj);
	} catch (error) {
		throw new Error(error.message);
	}
}

async function getAllUsersHandler(req, res) {
	try {
		const resObj = await users.get();
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function getOneUsersHandler(req, res) {
	try {
		const resObj = await users.get(req.params.id);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function updateUsersHandler(req, res) {
	const usersObject = req.body;
	try {
		const resObj = await users.update(req.params.id, usersObject);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function deleteUsersHandler(req, res) {
	try {
		const resObj = await users.delete(req.params.id);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	createHandler,
	getAllUsersHandler,
	getOneUsersHandler,
	updateUsersHandler,
	deleteUsersHandler,
};
