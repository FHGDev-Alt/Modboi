const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let embed = new discord.RichEmbed()
  .setTitle("Modboi Invitation")
  .setDescription(`I can't use invite links.\nHere's an OAuth2 link instead! Click [here](https://discordapp.com/api/oauth2/authorize?client_id=442066892497354763&permissions=8&redirect_uri=https%3A%2F%2Fdiscordbots.org%2Fbot%2F427846834225020928&response_type=code&scope=bot%20guilds) to invite me!`)
  .setColor("GREEN")
  .setFooter(`Invite Command`)
  .setTimestamp()
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "invite"
}
