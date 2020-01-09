'use strict';

const moment = require('moment');
const {adg} = require('utils-mad');

module.exports = async () => {
    const {data} = await adg.query('querylog');
    const domains = {};

    data.forEach(elem => {
        const host = elem.question.host.replace(/^www\./, '');

        if (!domains[host]) {
            domains[host] = `${elem.reason
                .replace('NotFilteredNotFound', ' ')
                .replace('FilteredBlackList', '-')
                .replace('NotFilteredWhiteList', '+')
                .replace('FilteredSafeSearch', '#')
            } ${moment(elem.time).format('HH:mm')}`;
        }
    });

    return Object.entries(domains)
        .map(([key, value]) => `${value} ${key}`)
        .reverse()
        .join('\n');
};
