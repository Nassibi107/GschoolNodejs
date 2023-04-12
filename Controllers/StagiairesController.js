const Stagiaire = require("../Modules/StagiaireModule");
const bcrypt = require("bcrypt") 
const jwt = require("jsonwebtoken");
const { model, models } = require("mongoose");

exports.register = async (req,res) => {
       try {
            data = req.body  ;
            stg = new Stagiaire (data) ;
           salt = bcrypt.genSaltSync(10) ;
        cryptedPass = await bcrypt.hashSync(data.password,salt) ;
        stg.password =cryptedPass ;
        stg.save() ;
        console.log(Str)
        res.status(200).send(cryptedPass)
       } catch (error) {
             res.send(error) ;
       }
         
}

exports.login =  async  (req,res) => {
   
      data = req.body ;
      stg = await Stagiaire.findOne({email:data.email})
      if (!stg) {
            res.status(404).send("email or password invalid !");
      }else {
            validPass = bcrypt.compareSync(data.password ,stg.password)
           if (!validPass) {
                res.status(401).send("email or password invalid !");
           }else {
               payload = {
                  _id :stg._id ,
                  email :stg.email ,
                  Fullname : stg.FullName,
                  role :stg.role
               },
               token =jwt.sign(payload ,"#12ch9919G$",{expiresIn:"2h"})
               res.status(200).send({myToken : token})
           }
      }


}
