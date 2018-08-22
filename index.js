const Discord = require('discord.js');
const client = new Discord.Client();

const Token = "";

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

const Words = ['play', ';play'];

client.on('message', msg => {
    if(msg.content.length > 0){
        let command = msg.content.substring(1);

        if(msg.channel.name != 'bot-music') {
            Words.forEach(word => {
                if(command.startsWith(word)) {
                    msg.reply('Please use music channel #bot-music');
                }
            });
        }
    }
});

client.login(Token);