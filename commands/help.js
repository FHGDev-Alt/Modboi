const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const embed = new discord.RichEmbed()
  .setTitle("ModBoi Help")
  .setDescription("This is a list of my moderation commands.")
  .addField("Support", "Help\nSupport (coming soon)")
  .addField("Moderation", "Ban (coming soon)\nHackban (coming soon)\nKick (coming soon)\nUnhackban (coming soon)\nMute (coming soon)\n Unmute (coming soon)")
  .addField("Bot", "Ping (coming soon)\nUptime (coming soon)")
  .setThumbnail(bot.user.avatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "help"
}
