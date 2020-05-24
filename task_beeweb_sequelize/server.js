const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

app.use(bodyParser.json())
app.use(cors())

const db = require('./app/config/db.config.js');
  
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
});
 
require('./app/route/users.route.js')(app);
require('./app/route/workspaces.route.js')(app);

var server = app.listen(8800, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})