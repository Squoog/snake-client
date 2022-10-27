const net = require('net');
const connect = require('./client.js');
const setupInput = require('./input.js');


const connection = connect();

setupInput(connection);

// handleUserInput();