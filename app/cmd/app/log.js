'use strict';

const appRoot = require('app-root-path');
const fs = require('fs');
const {printMsg} = require('../../lib/utils');
const {promisify} = require('util');

const readFile = promisify(fs.readFile);

module.exports = async () => {
    try {
        const log = await readFile(`${appRoot}/forever.log`);
        return log.length > 1 ? log.toString() : 'Log is empty';
    } catch (err) {
        return printMsg(err);
    }
};
