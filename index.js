var ping = require('ping');
var fs = require('fs');

const hosts = ['192.168.1.1', 'google.com', 'yahoo.com'];
const intervalSeconds = 60;

setInterval(() => {
    hosts.forEach(function (host) {
        ping.sys.probe(host, function (isAlive) {
            let date = new Date();
            let msg = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()} >> ${host} ping failed!`
            if (!isAlive) {
                fs.appendFile('./fail.log', `${msg}\n`, () => {
                    console.log(msg);
                });
            }
        });
    });

}, intervalSeconds * 1000);