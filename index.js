const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;

const server = PeerServer({
  port: port,
  path: '/',
  allow_discovery: true,
  proxied: true,
});

console.log('PeerJS server running on port ' + port);
