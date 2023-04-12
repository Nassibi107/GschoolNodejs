const mongoose = require("mongoose") ;

const Filier = mongoose.model("filieres", {
    
    name : {type : String} ,
    sector : {type :String} ,
    modules : {type :Array} 
})


module.exports =Filier ;