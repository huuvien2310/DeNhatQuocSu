const Discord = require('discord.js');
const { api, port } = require('./config.json');
require("dotenv").config();

const client = new Discord.Client();
const prefix = '!';

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
    let customEmoji = message.guild.emojis.get("631511891440828431")
    message.channel.send(`${message.author}, Đụ má mày chửi thề con cặc nói chuyện vô văn hóa! Tao :gun: mày đó!`)
    message.react(customEmoji)
  }

  let command = message.content.split(' ')[0].slice(1);
  let args = message.content.replace('!' + command, '').trim();

  if(!command) return;

  switch(command){
    case "pin":
      client.channels.get(`828441457093771284`).send(`📌${args}`);
      //message.channel.send(`📌${args}`);
      break;
  }

});

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.login(process.env.TOKEN);
