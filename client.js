const net = require('net');

const conn = net.createConnection({
  host: '192.168.10.51',
  port: 3000,
});
conn.setEncoding('UTF8');

conn.on('connect', () => {
  conn.write('Hello from the client');
})

conn.on('data', (data) => {
  console.log("Server message:  ", data);
})