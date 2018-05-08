const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let em = new discord.RichEmbed()
  .setTitle("Modboi Support")
  .setDescription("Heyo! Need some help? Join my support server [here](https://discord.gg/JSqyTND 'join the support server')!")
  .setTimestamp()
  .setFooter(`Requested by ${message.author.username}`)
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "support"
}
