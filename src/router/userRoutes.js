'use strict';

const express = require('express');
const router = express.Router();


const {
	createHandler,
	getAllUsersHandler,
	getOneUsersHandler,
	updateUsersHandler,
	deleteUsersHandler,
} = require('../controller/userController');


router.post('/', createHandler);
router.get('/', getAllUsersHandler);
router.get('/:id', getOneUsersHandler);
router.put('/:id', updateUsersHandler);
router.delete('/:id', deleteUsersHandler);

module.exports = router;
