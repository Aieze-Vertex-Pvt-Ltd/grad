const express=require("express");

const app = express();

const auth = require('../grad-auth/routes/auth');

var resolveCrossDomain=function(req,res,next){

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,OPTIONS,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  res.header("Access-Control-Allow-Credentials", true);
  res.header("Strict-Transport-Security", 'max-age=15552000');

}

app.use(resolveCrossDomain);

app.use('/api/v1/auth', auth);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  logger.info(`[SERVER STARTED] Listening to port [${port}]`);
});


//require("./startup/routes")(app);

module.exports = server;


