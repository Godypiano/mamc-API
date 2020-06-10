const mongoose = require('mongoose');

console.log('db is here');
var con = mongoose.connect(
	"mongodb+srv://Admin:9Muv8dlrscB3HzBJ@customers-ahayu.mongodb.net/test?retryWrites=true&w=majority",
 //"postgres://ztwfikichlqdmf:30986c89f7a0ad8f08f7fa19666da24c25715ef5fc0d51cb3efd7456b5fc5abd@ec2-35-174-88-65.compute-1.amazonaws.com:5432/db91839bcqccb8",
        
    { userNewUrlParser: true },
	() => console.log('connect to db')
).then( async () =>{
    await console.log("Database havebeing connected");
    }).catch( (err) =>{
       console.log("Unable to connect to MongoDb");
       console.log(err);
    });
    

module.exports = con;
