const cron = require('node-cron');
const c = require('require-all')(`${__dirname}/lib`);
const b = require('require-all')(`${__dirname}/../bot/cmd`);

/**
 * Schedule crons
 * @param {Object} bot telegram node api
 */
const run = bot => {
    // every N minutes
    cron.schedule('*/10 * * * *', () => {
        c.dns.clients();
        c.dns.queries();
        c.dns.top();
    });

    // every hour
    cron.schedule('0 * * * *', () => {
        b.dns.update();
        c.sys.ip(bot);
        c.ufw.status(bot);
    });

    // every day at
    cron.schedule('0 20 * * *', () => {
        c.pi.update(bot);
        c.ufw.log(bot);
    });

    // every day at
    cron.schedule('05 5 * * *', () => b.pi.reboot());
};

module.exports = run;
