const net = require('net');
const connect = require('./client.js');


console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => {
    handleUserInput(key);
  });

  return stdin;
};
setupInput();

const handleUserInput = function (key) {
  process.stdout.write(key);

  if (key === '\u0003') {
    process.stdout.write("Exiting snek game")
    process.exit();
  }

};