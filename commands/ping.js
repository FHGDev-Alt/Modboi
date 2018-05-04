module.exports.run = (bot, message, args) => {
  let em = new discord.RichEmbed()
  .setTitle("")
  .setDescription(`PONG! My ping is ${Math.floor(bot.ping)}ms!`)
  .setTimestamp()
}

module.exports.help = {
  name: "ping"
}
