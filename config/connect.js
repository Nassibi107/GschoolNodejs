const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/school_gs')
.then(() => console.log('Connected ♥'))
.catch (() => console.log("connect failed  -_- !"))
module.exports=mongoose ;