const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  const embed = new discord.RichEmbed()
  .setTitle("Modboi Help")
  .setDescription("This is a list of my moderation commands.")
  .addField("Support", "help\nsupport")
  .addField("Moderation", "ban\nhackban\nkick\nunhackban\nmute\nunmute\naddrole\ndelrole\n")
  .addField("Bot", "ping\nuptime")
  .setThumbnail(bot.user.avatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "help"
}
