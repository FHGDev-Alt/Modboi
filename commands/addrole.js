module.exports.run = (bot, message, args) => {
  let role = message.mentions.roles.first();
  if (!role) return message.channel.send(`You need to mention a role.`);
  let member = message.mentions.members.first();
  if (!member) return message.channel.send("You need to mention someone.");
  let roleid = role.id;
  let rolename = role.name;
  
  if (!message.guild.roles.get(roleid)) return message.channel.send(`That role doesn't exist...`);
  member.addRole(role.id);
  let em = new discord.RichEmbed()
  .setTitle("Hulkbot Addrole")
  .setDescription(`Okay! I added the role ${rolename} to the user <@${member.id}>.`)
  .setTimestamp()
  .setFooter(`${message.author.username} added role ${rolename} to user ${member.user.username}.`)
  message.channel.send({embed: em})
};

module.exports.help = {
  name: "addrole"
};
