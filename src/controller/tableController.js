'use strict';

//database
const Tables = require('./../models/dataCollection');
const tablesModel = require('./../models/table');
const tables = new Tables(tablesModel);

async function createHandler(req, res) {
	const tablesObject = req.body;
	try {
		const resObj = await tables.create(tablesObject);
		res.status(201).json(resObj);
	} catch (error) {
		throw new Error(error.message);
	}
}

async function getAllTablesHandler(req, res) {
	try {
		const resObj = await tables.read();
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function getOneTablesHandler(req, res) {
	try {
		const resObj = await tables.read(req.params.id);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function updateTablesHandler(req, res) {
	const tablesObject = req.body;
	try {
		const resObj = await tables.update(req.params.id, tablesObject);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function deleteTablesHandler(req, res) {
	try {
		const resObj = await tables.delete(req.params.id);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

module.exports = {
	createHandler,
	getAllTablesHandler,
	getOneTablesHandler,
	updateTablesHandler,
	deleteTablesHandler,
};
