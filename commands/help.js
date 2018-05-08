const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const embed = new discord.RichEmbed()
  .setTitle("Modboi Help")
  .setDescription("This is a list of my moderation commands.")
  .addField("Support", "Help\nSupport (coming soon)")
  .addField("Moderation", "Ban\nHackban\nKick\nUnhackban\nMute\nUnmute\naddrole\ndelrole\n")
  .addField("Bot", "Ping\nUptime")
  .setThumbnail(bot.user.avatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "help"
}
