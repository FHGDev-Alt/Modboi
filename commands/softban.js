module.exports.run = (bot, message, args) => {
  let member = message.mentions.members.first();
  if (!member) {
    message.channel.send("You need to mention someone.")
  }
  let reason = args.join(' ');
  
  if (message.member.hasPermission(["BAN_MEMBERS"] || ["ADMINISTRATOR"]) {
    if (reason) {
      member.ban(reason)
      message.channel.send(`Softbanned ${member.displayName} for reason ${reason}.`)
      message.guild.unban(member.user.id)
    } else {
      member.ban()
      message.channel.send(`Softbanned ${member.displayName}.`)
      message.guild.unban(member.user.id)
    }
  } else {
    message.channel.send("You don't have permission to ban that member.")
  }
}

module.exports.help = {
  name: "softban"
