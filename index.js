let ping = require ("net-ping");
const sessionConfig ={
    // networkProtocol: ping.NetworkProtocol.IPv4,
    // packetSize: 16,
    // retries: 3,
    // sessionId: (process.pid % 65535),
    timeout: 2000,
    // ttl: 128
};
var session = ping.createSession(sessionConfig);

const target = 'http://onet.pl';
setInterval(() => {
    pingAddress(target);
}, 3000);

function pingAddress(target) {
    session.pingHost (target, function (error, target) {
            if (error)
                console.log (target + ": " + error.toString ());
            else
                console.log (target + ": Alive");
            });
        }