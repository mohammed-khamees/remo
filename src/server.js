'use strict';

const userRouter = require('./router/userRoutes');
const tableRouter = require('./router/tableRoutes');

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/cafe', tableRouter);
app.use('/user', tableRouter);

module.exports = {
	app,
	start: (port) => {
		if (!port) {
			throw new Error('Missing Port');
		}
		app.listen(port, () => console.log(`Listening on ${port}`));
	},
};
