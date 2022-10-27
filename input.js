const setupInput = function() {
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

  if (key === '\u0003') {
    process.stdout.write("Exiting snek game");
    process.exit();
  } else if (key === 'W') {
    process.stdout.write("Move: up");
  } else if (key === 'A') {
    process.stdout.write("Move: left");
  } else if (key === 'S') {
    process.stdout.write("Move: down");
  } else if (key === 'D') {
    process.stdout.write("Move: right");
  }
};

module.exports = (setupInput);