/* eslint-disable key-spacing, no-multi-spaces, indent */

const commands = [
    '/help - the list of all available commands',
    '',
    '/arp - get local network devices list',
    '/reboot - reboot',
    '/shutdown - shutdown',
    '/stats - get some usage stats',
    '/updates - check for updates'
];

const msg = {
    readme: {
        badges: [
                    '![Dependencies](https://david-dm.org/k03mad/raspi-tlgrm-bot.svg)'
        ],
        footer:     '(⌐■_■)',
        header:     'Get data from Raspberry Pi 3',
        md:         'README.md generated',
        txt:        'commands.txt generated'
    },
    send: {
        mark:       (res, ex)       => `I can't send markdown message.\n${ex}\n${JSON.stringify(res)}`,
        norm:       (res, ex)       => `I can't send normal message.\n${ex}\n${JSON.stringify(res)}`
    }
};

module.exports = {commands, msg};
