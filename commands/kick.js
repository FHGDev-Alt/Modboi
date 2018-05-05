const discord = require('discord.js')

module.exports.run = (bot, message, args) => {
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("You need to mention someone.");
  let reason = args.slice(1).join(" ");
  let em = new discord.RichEmbed()
  .setTitle("Modboi Kicking")
  .setTimestamp()
  .setColor(`RANDOM`)
  if (reason) {
    em.setDescription(`BOOM! ${member.user.username} is outta here! Reason: ${reason}`);
    member.kick(reason).catch(err => console.error(err))
    message.channel.send({embed: em});
  } else {
    em.setDescription(`BOOM! ${member.user.username} is outta here!`);
    member.kick().catch(err => console.error(err))
    message.channel.send({embed: em})
  }
}

module.exports.help = {
    name: "kick"
}
