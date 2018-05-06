let discord = require('discord.js')

module.exports.run = (bot, message, args) => {
if (message.author.id !== process.env.owner) return message.channel.send("Sorry, only my owner can use that command.")
let em = new discord.RichEmbed()
.setTitle("Modboi Restarting...")
.setDescription(":wave: Restarting...")
.setThumbnail("https://media1.giphy.com/media/WKJpCXfvBHyla/giphy.gif")
.setTimestamp()
.setColor("RANDOM")
let embed = new discord.RichEmbed()
.setTitle("Modboi Restarted!")
.setDescription(":thumbsup: Modboi Successfully Restarted.")
.setThumbnail(bot.user.avatarURL)
.setTimestamp()
.setColor("RANDOM")

  function restart(channel) {
    channel.send({embed: em})
    .then(m => m.delete(5000))
    .then(() => bot.destroy())
    .then(() => bot.login(process.env.token))
    .catch(err => console.error(err))
    .then(() => message.channel.send({embed: embed}))
  }
  
  restart(message.channel)
}

module.exports.help = {
  name: "restart"
}
