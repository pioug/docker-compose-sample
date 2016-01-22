'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply('Hello API!');
  }
});

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
