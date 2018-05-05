let discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let em = new discord.RichEmbed()
  .setTitle("Modboi Ping")
  .setDescription(`PONG! My ping is ${Math.floor(bot.ping)}ms!`)
  .setTimestamp()
  .setColor("RANDOM")
  message.channel.send({embed: em})
}

module.exports.help = {
  name: "ping"
}
