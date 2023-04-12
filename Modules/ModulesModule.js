const mongoose = require("mongoose") ;

const Module = mongoose.model("filieres", {
    nameModule : {type : String} ,
    cof : {type :Number} 
})


module.exports =Module ;