const {nextId} = require('./constants');

const net = require('net');
const port = 3000;

const listOfClients = [];
const server = net.createServer();

server.on('connect', (client) => {
  client.setEncoding('UTF8');

  client.on('data', (data) => {
    console.log(`${client.id}: ${data}`);
    for (const indiv of listOfClients) {
      if(client.id !== indiv.id) {
        indiv.write(`      : ${data}`);
      }
    }
  });

  client.id = nextId();
  listOfClients.push(client)
  console.log(`${client.id} is connected to the server!`);
  client.write('Welcome to the server! \n');
});

// server.on('timeout', () => {
//   console.log(`Is anyone there?`)
// })

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
