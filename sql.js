const sql = require('mysql')
exports.fire = (bot, member, guild) => {

  const connection = sql.createConnection({
      host: process.env.mysqlhost,
      user: process.env.mysqluser,
      password: process.env.mysqlpass
  })
  
  connection.connect(err => {
    if (err) {
      console.error(err)
    } else {
      console.log("MySQL Database ready!")
    }
  })
  
  connection.query('CREATE TABLE guilds (filter boolean,prefix string)')
}

