const Discord = require('discord.js');
const { token, api, port } = require('./config.json');
const MinhID = '328939258725269517';

const client = new Discord.Client();

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
    message.react(message.guild.emojis.get('603412266595123200'))
    message.channel.send(`${message.author}, Đụ má mày chửi thề con cặc nói chuyện vô văn hóa! Tao :gun: mày đó!`)
  }
  if (message.author.id == MinhID){

    let blacklist2 = ['b5'];

    let foundInText2 = false;
    for (var i in blacklist2){
      if (message.content.toLowerCase().includes(blacklist2[i].toLowerCase())) foundInText2 = true;
    }

    if (foundInText2){
      message.react("🔫")
      message.channel.send(`${message.author}, Đụ má mày chơi dơ! Tao :gun: mày đó!`)
    }
  }
});

client.on('ready', () => {
  console.log('Bot is now connected');
});

client.login(token);
