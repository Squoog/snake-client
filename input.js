let connection;
let fun;
let {MOVEUP, MOVELEFT, MOVEDOWN, MOVERIGHT, P1, P2, P3} = require('./constants');

const setupInput = function(conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", key => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = function(key) {
  process.stdout.write(key);

  const i = function(key) {
    fun = setInterval(() => {
      connection.write(key);
    }, 200);
  };

  if (key === '\u0003') {
    process.stdout.write("Exiting snek game");
    process.exit();
  } else if (key === 'w') {
    connection.write(MOVEUP);
  } else if (key === 'a') {
    connection.write(MOVELEFT);
  } else if (key === 's') {
    connection.write(MOVEDOWN);
  } else if (key === 'd') {
    connection.write(MOVERIGHT);
  }

  else if (key === 'j'){
    connection.write(P1);
  }
  else if (key === 'k'){
    connection.write(P2);
  }
  else if (key === 'l'){
    connection.write(P3);
  }
};

module.exports = (setupInput);