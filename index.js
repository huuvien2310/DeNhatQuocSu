const Discord = require('discord.js');
const { api, port } = require('./config.json');
require("dotenv").config();

const client = new Discord.Client();
const prefix = '_';

client.on('message', (message) => {
  client.user.setActivity("Youtube", {type: "WATCHING"})

  if (message.author.bot) return;

  let blacklist = ['địt', 'đụ', 'đĩ', 'đỉ', 'lồn', 'loz', 'đụ má', 'đĩ mẹ','đụ mẹ', 'cặc'];

  let foundInText = false;

  for (var i in blacklist){
    if (message.content.toLowerCase().includes(blacklist[i].toLowerCase())) foundInText = true;
  }

  if (foundInText){
    message.react("🔫")
    message.channel.send(`${message.author}, Đụ má mày chửi thề con cặc nói chuyện vô văn hóa! Tao :gun: mày đó!`)
  }

  let command = message.content.split(' ')[0].slice(1);
  let args = message.content.replace('_' + command, '').trim();

  if(command == "pin" && !foundInText){
    client.channels.get(`828795393365770270`).send(`📌${args}`);
  }
});

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.login(process.env.TOKEN);
