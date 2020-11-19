const RPC = require('discord-rpc');
const { details, state, largeKey, largeText, smallKey, smallText, clientid } = require('./config.json');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: details,
        state: state,
        startTimestamp: Date.now(),
        largeImageKey: largeKey,
        largeImageText: largeText,
        smallImageKey: smallKey,
        smallImageText: smallText
    });
    console.log('RPC active')
});
rpc.login({
    clientId: clientid
});