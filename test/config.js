const servers = {
  tcp: {
    protocol: 'tcp', port: '50001', host: 'explorer.canadaecoin.ca',
  },
  ssl: {
    protocol: 'ssl', port: '50002', host: 'explorer.canadaecoin.ca',
  },
  ws: {
    protocol: 'ws', port: '50003', host: 'explorer.canadaecoin.ca',
  },
  wss: {
    protocol: 'wss', port: '50004', host: 'explorer.canadaecoin.ca',
  },
}

const serversArray = [
  servers.tcp,
  servers.ssl,
  // TODO: WebSocket is commented out for CI, until we find public servers for this protocol.
  // electrumServers.ws,
  // electrumServers.wss,
]

module.exports = {
  servers,
  serversArray,
}
