const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
    name: 'boj'
  });

  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Connected!');
    conn.write("Name: Bob");
    // setInterval(() => {
    //   conn.write("Move: up");
    // },1000);
  });
  

  return conn;
};
module.exports = connect;

