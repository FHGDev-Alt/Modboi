let discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let member = message.members.mentions.first();
  let reason = args.join(" ").slice(1)
  let embed = new discord.RichEmbed()
  .setTitle("ModBoi Banning")
  .setDescription(`:point_right: ${member.user.username} is outta here! Reason: ${reason}`)
  .setColor("RANDOM")
  .setTimestamp()
  
  if (!member) return message.channel.send("You need to mention someone.")
  if (!reason) {
    member.ban()
    embed.setDescription(`:point_right: ${member.user.username} is outta here!`)
    message.channel.send({embed: embed})
  } else {
    member.ban(reason)
    message.channel.send({embed: embed})  
  }
}

module.exports.help = {
  name: "ban"
}
