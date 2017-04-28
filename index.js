#!/usr/bin/env node
'use strict';

require('babel-register');

var ping = require('ping');
var fs = require('fs');

const hosts = ['facebook.com', 'google.com', 'yahoo.com'];
const intervalSeconds = 60;

setInterval(() => {
    const date = new Date();
    const time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    hosts.forEach((host) => {
        ping.sys.probe(host, (isAlive) => {
            let msg = `${time} >> ${host} ping failed!`
            if (!isAlive) {
                fs.appendFile('./fail.log', `${msg}\n`);
            }
        });
    });

}, intervalSeconds * 1000);
