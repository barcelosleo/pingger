var ping = require('ping');
var fs = require('fs');

const hosts = ['facebook.com', 'google.com', 'yahoo.com'];
const intervalSeconds = 60;

setInterval(() => {
    hosts.forEach((host) => {
        ping.sys.probe(host, (isAlive) => {
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
