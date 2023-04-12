const express = require("express");
const route = express.Router() ;
const stg =require("../Controllers/StagiairesController")
route.post("/register",stg.register) ;
route.post("/login",stg.login) ;

module.exports =route ;