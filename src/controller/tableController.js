'use strict';

//database
const Tables = require('./../models/dataCollection');
const tablesModel = require('./../models/table');
const tables = new Tables(tablesModel);

async function createHandler(req, res) {
	if (req.body.tableNameId) {
		const table = await tables.get(req.body.tableNameId);
		if (table) {
			return res.redirect(`/cafe/${table._id}`);
		}
	}
	const tableName = req.body.topic;

	try {
		const table = await tables.create({ name: tableName });

		res.redirect(`/cafe/${table._id}`);
	} catch (error) {
		throw new Error(error.message);
	}
}

async function getAllTablesHandler(req, res, next) {
	try {
		const resObj = await tables.get();
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function getOneTablesHandler(req, res, next) {
	try {
		const table = await tables.get(req.params.id);
		res.render('tables', { table });
	} catch (error) {
		next(error);
	}
}

async function updateTablesHandler(req, res, next) {
	const tablesObject = req.body;
	try {
		const resObj = await tables.update(req.params.id, tablesObject);
		res.json(resObj);
	} catch (error) {
		next(error);
	}
}

async function deleteTablesHandler(req, res, next) {
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
