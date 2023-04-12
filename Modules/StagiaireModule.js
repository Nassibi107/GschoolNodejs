const mongoose = require("mongoose") ;

const  Stagiaire = mongoose.model("stagiaires",{
        img : {
      type :String 
     },
    FullName : {
      type :String ,
      require :1 
    },

    email : {
      type :String ,
      unique : [true,"this email was existe !! "],
      lowercase :true ,
      required:[true,"Email is required"],
    //     validate:{
    //     validateur: v  => { 
    //          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    //     },
    //     message:"email not valide!"
    // }  

    },

    password : {
        type :String 
    },
    gender: {
      type :String 
    },
 birthDay: {type: Date},
  role :{type :String}
})

module.exports = Stagiaire ;