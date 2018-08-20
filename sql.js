const sql = require('mysql')
module.exports.fire = (bot, member, guild) => {

  const connection = sql.createConnection({
      host: process.env.mysqlhost,
      user: process.env.mysqluser,
      password: process.env.mysqlpass
  })
  
  connection.connect(() => {
    console.log("MySQL ready!")
  }).catch(err => {
    console.error(err) 
  })
  
  connection.query('CREATE TABLE guilds (filter boolean,prefix string)')
}

