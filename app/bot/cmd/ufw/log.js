const {run, UFW_LOG} = require('../../../utils');

/**
 * Get UFW logs
 */
module.exports = async () => {
    const log = await run(`cat ${UFW_LOG}`);

    if (!log) {
        return 'Log is empty';
    }

    const counts = {};

    log
        .split('\n')
        .filter(Boolean)
        .map(elem => {
            const [, ip, port] = elem.match(/SRC=(.+?) .+DPT=(.+?) /);
            return `[${ip}](https://ipinfo.io/${ip}) to ${port}`;
        })
        .forEach(x => {
            counts[x] = (counts[x] || 0) + 1;
        });

    const output = [];

    for (const elem in counts) {
        output.push(`${counts[elem]}: ${elem}`);
    }

    return output.sort().reverse().join('\n');
};