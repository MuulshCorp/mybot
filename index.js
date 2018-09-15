const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
var request = require("request");
const config = require("./config.json");


client.on("ready", () => {
	client.user.setActivity(`parler sur ${client.guilds.size} serveurs`);
	console.log(`je suis sur ${client.guilds.size} serveurs`)
});


client.on("guildCreate", guild => {
	client.user.setActivity(`parler sur ${client.guilds.size} serveurs`);
});

client.on("guildDelete", guild => {
	client.user.setActivity(`parler sur ${client.guilds.size} serveurs`);
});


client.on("message", async message => {
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

const argsdetect = message.content.slice('0').trim().split(/ +/g);
const detect = argsdetect.shift().toLowerCase();

if (detect == 'ah' && message.author.id !== '317968962656796674') {
	message.channel.send('b').catch();
}

if (detect == '...' && message.author.id == '385337893553438720') {
	message.channel.send('...').catch();
}

if (detect == 'QWA' && message.author.id == '388731578865418252') {
	message.channel.send('UI').catch();
}

if (detect == 'ouééé') {
	message.channel.send('ééé').catch();
}

if(message.content.indexOf(config.prefix) !== 0) return;
if (!message.content.startsWith(config.prefix) || message.author.bot) return;

if (command == 'th' && message.author.id == '317968962656796674') {
	const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage+':thinking:').catch();
}

if (command == 'bui') {
	message.delete().catch(O_o=>{}); 
    message.channel.send('Lien pour inviter bui : http://slackercompany.ml/bui').catch();
}

if (command == 'site') {
	message.delete().catch(O_o=>{}); 
    message.channel.send('Lien pour mon site : http://slackercompany.ml/').catch();
}

if (command == 'info') {
	message.delete().catch(O_o=>{}); 
	message.channel.send(`je suis sur ${client.guilds.size} serveurs`).catch();
}
});
client.login(process.env.TOKEN);