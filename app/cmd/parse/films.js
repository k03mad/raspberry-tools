'use strict';

const {shell} = require('utils-mad');

module.exports = () => shell.script(
    'magnet-films',
    'update',
);