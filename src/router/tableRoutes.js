const express = require('express');
const router = express.Router();

const {
	createHandler,
	getAllTablesHandler,
	getOneTablesHandler,
	updateTablesHandler,
	deleteTablesHandler,
} = require('../controller/tableController');

router.post('/', createHandler);
router.get('/', getAllTablesHandler);
router.get('/:id', getOneTablesHandler);
router.put('/:id', updateTablesHandler);
router.delete('/:id', deleteTablesHandler);

module.exports = router;
