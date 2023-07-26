var mysql = require('mysql2');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123',
  database: 'blog'
});
 

db.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + db.threadId);
});

module.exports = {
  db
}