let ping = require('net-ping');
const sessionConfig = {
    // networkProtocol: ping.NetworkProtocol.IPv4,
    // packetSize: 16,
    // retries: 3,
    // sessionId: (process.pid % 65535),
    timeout: 2000,
    // ttl: 128
};
var session = ping.createSession(sessionConfig);

// const target = 'http://onet.pl';
const target = '192.168.1.1';
const domTarget = document.querySelector('.js-target');

function setStatus(targetName, status) {
    domTarget && domTarget.innerHTML(`${targetName} : ${status}`);
}

function pingAddress(target) {
    session.pingHost(target, (error, target) => {
        error
            ? setStatus(target, error.toString())
            : setStatus(target, [Alive]);
    });
}

console.log('http://localhost:8080');
setInterval(() => {
    pingAddress(target);
}, 5000);
