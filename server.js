const express = require("express") ;
const app = express() ;
require("dotenv/config") ;
const con_W_db = require("./config/connect");
con_W_db.connect;
app.use(express.urlencoded({ extended: true }));
const Port =  process.env.LOCAL_PORT|| process.env.LOCAL_PORT_SAFE
app.get ("/" , (req,rep) => {
  rep.send("hello world ♥")
} )
app.use("/stg",require("./Routes/Stagiaire.Routes"));
app.listen(Port ,()=> {
  console.log(`example app is running on  http://localhost:${Port}`)
})