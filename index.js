require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	// DiscordUtil.clientUserID = client.user.id;
	console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
	console.log(msg);
});

client.login(process.env.DiscordToken);