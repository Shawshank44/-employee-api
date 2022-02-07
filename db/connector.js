const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/employees',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
}).then(()=>{
    console.log("Connection Successful We can now insert data")
}).catch((e)=>{
    console.log(e)

})