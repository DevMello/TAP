const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
        msg.reply('pong');
});
client.login('Nzg0ODY4MDI1MzM3MzgwODY0.X8vjTw.-bzwIuK0aJ5wIQa-AnlF0qs6-74');


