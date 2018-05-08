// Load Dependencies.
const discord = require('discord.js');
const enmap = require('enmap');
const bot = new discord.Client();
const enmaplevel = require('enmap-level');
const rethink = new enmaplevel({ name: 'test' });
const exec = require('child_process').exec
const prefix = "m!"
const sqldb = require('./sql.js')

// Done.


// Load Commands.

bot.commands = new discord.Collection()

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

// Done.

// Load Settings.

bot.settings = new enmap({provider: rethink})

const coresettings = {
  modlogchannel: "guild-bot-log"
}

// Done

// Ready event.

bot.on('ready', () => {
  bot.user.setActivity(`Loading ModBoi...`, {type: "STREAMING", url: "https://twitch.tv/freakinghulk"})
  setTimeout(() => {
    bot.user.setActivity(`for m!help | ${bot.guilds.size} server(s)`, {type: "WATCHING"})
  }, 10000)
  
  bot.guilds.forEach((guild, id) => {
    // Load the DB.
    function setthesettings(err) {
      if (!bot.settings.get(id)) {
        bot.settings.set(id, coresettings)
        console.log(`Created Settings for guild ${guild.name}`)
      } else {
        const guildConf = bot.settings.get(id)
        console.log("Loaded settings.")
      }
      if (err) return console.error(err);
    }
    
    setthesettings()
    // Done.
  })
})

// Done.

// Message event.

bot.on('message', async message => {
  //
  let mArray = message.content.split(" ")
  //
  let args = mArray.slice(1)
  //  
  const guildConf = await bot.settings.get(message.guild.id)
  //
  let cmdcon = mArray[0].slice(prefix.length)
  //
  let cmd = bot.commands.get(cmdcon)
  //
  if (message.author.bot) return;
  //
  if (!message.guild) return;
  //
  if (!message.content.startsWith(prefix)) return;
  //
  if (cmd) { 
    //
    message.channel.startTyping();
    //
    setTimeout(() => {
      cmd.run(bot, message, args);
      //
    }, 5000);
    //
    message.channel.stopTyping();
    //
    console.log(`${message.author.username} used the ${cmdcon} command.`);
    //
  }
})

// Done.

// Run when a member joins a guild.

bot.on('guildMemberAdd', member => {
  let guild = member.guild
  require('./events/guildMemberAdd.js')(bot, guild, member)
  sqldb.fire(bot, member, guild)
})

// Done.

// Log the bot in.

bot.login(process.env.token)

// Done.

exports.runcode = exec
