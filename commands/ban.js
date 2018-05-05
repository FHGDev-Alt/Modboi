let discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("You need to mention someone.")
  let reason = args.slice(1).join(" ")
  let embed = new discord.RichEmbed()
  .setTitle("ModBoi Banning")
  .setDescription(`:point_right: ${member.displayName} is outta here! Reason: ${reason}`)
  .setColor("RANDOM")
  .setTimestamp()
  
  if (!reason) {
    member.ban()
    embed.setDescription(`:point_right: ${member.displayName} is outta here!`)
    message.channel.send({embed: embed})
  } else {
    member.ban(reason)
    message.channel.send({embed: embed})  
  }
}

module.exports.help = {
  name: "ban"
}
