'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
// Prepare the express app
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const userRouter = require('./router/userRoutes');
const tableRouter = require('./router/tableRoutes');

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

const data = JSON.parse(fs.readFileSync('data.json').toString());

app.get('/', (req, res) => {
	// res.json(data);
	res.render('entrance');
});

app.use('/cafe', tableRouter);
app.use('/user', userRouter);

//socket connection
io.on('connection', (socket) => {
	socket.on('join-room', (tableId, userId) => {
		socket.join(tableId);
		socket.broadcast.to(tableId).emit('user-connected', userId);

		socket.on('message', (message) => {
			io.to(tableId).emit('createMessage', message);
		});

		socket.on('disconnect', () => {
			socket.broadcast.to(tableId).emit('user-disconnected', userId);
		});
	});
});

module.exports = {
	data,
	server,
	start: (port) => {
		if (!port) {
			throw new Error('Missing Port');
		}
		server.listen(port, () => console.log(`Listening on ${port}`));
	},
};
