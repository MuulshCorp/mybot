const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
var request = require("request");
const config = require("config.json");


client.on("ready", () => {
	client.user.setActivity(`je suis sur ${client.guilds.size} serveurs`);
	console.log(`je suis sur ${client.guilds.size} serveurs`)
});


client.on("guildCreate", guild => {
	client.user.setActivity(`je suis sur ${client.guilds.size} serveurs`);
});

client.on("guildDelete", guild => {
	client.user.setActivity(`je suis sur ${client.guilds.size} serveurs`);
});


client.on("message", async message => {
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

const detect = message.content;
if (detect == 'ah') {
	message.channel.send('b');
}

if (detect == '...' && message.author.id == '385337893553438720') {
	message.channel.send('...');
}

if (detect == 'QWA' && message.author.id == '388731578865418252') {
	message.channel.send('...');
}

if(message.content.indexOf(config.prefix) !== 0) return;
if (!message.content.startsWith(config.prefix) || message.author.bot) return;

if (command == 'bui') {
    message.channel.send('Lien pour inviter bui : http://slackercompany.ml/bui');
}
});
client.login(process.env.TOKEN);