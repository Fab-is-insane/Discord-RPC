const RPC = require('discord-rpc');
const { details, state, largeKey, largeText, smallKey, smallText, clientid } = require('./config.json');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: details,
        state: state,
        startTimestamp: Date.now(),      //You can add endTimestamp also 
        largeImageKey: largeKey,
        largeImageText: largeText,
        smallImageKey: smallKey,
        smallImageText: smallText
    });
    console.log(`RPC active for ${RPC.Client.name}`)
});
rpc.login({
    clientId: clientid
});

// All the values are declared in config.json