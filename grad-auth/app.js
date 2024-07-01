const express=require("express");
const app = express();
const helmet = require("helmet");
//const auth = require('../grad-auth/routes/auth');
require("dotenv").config();

var resolveCrossDomain=function(req,res,next){

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  res.header("Access-Control-Allow-Credentials", true);
  res.header("Strict-Transport-Security", 'max-age=15552000');
next();
}

app.use(helmet());
app.use(resolveCrossDomain);

//app.use('/api/v1/auth', auth);
console.log('aaa')

require("./startup/routes")(app);
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`http://localhost:${port}`)
});



module.exports = server;


