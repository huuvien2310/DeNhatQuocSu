const Discord = require('discord.js');
const { token, api, port } = require('./config.json');

const client = new Discord.Client();

client.on('message', (message) => {
  client.user.setActivity("ANTV", {type: "WATCHING"})
  
  if (message.author.bot) return;

  let blacklist = ['địt', 'đụ', 'đĩ', 'đỉ', 'lồn', 'loz', 'đụ má', 'đĩ mẹ','đụ mẹ', 'cặc', 'bot ngu'];

  let foundInText = false;
  for (var i in blacklist){
    if (message.content.toLowerCase().includes(blacklist[i].toLowerCase())) foundInText = true;
  }

  let customEmoji = message.guild.emojis.get("602504328070168604")
  if (foundInText){
    message.react("🔫")
    message.react(customEmoji)
    message.channel.send(`${message.author}, Đụ má mày chửi thề con cặc nói chuyện vô văn hóa! tao :gun: mày đó!`)
  }
});

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.login(token);
