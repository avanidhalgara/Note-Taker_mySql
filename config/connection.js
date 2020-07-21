const mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
    host: 'mkorvuw3sl6cu9ms.cbetxkdyhwsb.us-east-1.rds.amazonaws.comt',
    port: 3306,
    user: 'pyujdgxnuhxi72tc',
    password: 'v3jcik7644hmyq07',
    database: 'kct9iean0roagv7b'
  });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// we give connection.query access to promises
// i.e. .then() and .catch()
connection.query = util.promisify(connection.query);

module.exports = connection;