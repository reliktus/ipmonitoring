let ping = require('net-ping')
const sessionConfig = {
    // networkProtocol: ping.NetworkProtocol.IPv4,
    // packetSize: 16,
    // retries: 3,
    // sessionId: (process.pid % 65535),
    timeout: 2000,
    // ttl: 128
}
var session = ping.createSession(sessionConfig)

// const target = 'http://onet.pl';
const target = '192.168.1.1'
setInterval(() => {
    pingAddress(target)
}, 3000)

function pingAddress(target) {
    session.pingHost(target, function (error, target) {
        error
            ? console.log(target + ': ' + error.toString())
            : console.log(target + ': Alive')
    })
}
