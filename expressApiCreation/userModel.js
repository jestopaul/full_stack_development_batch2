

var mongoose = require('mongoose');//db connecting package(connetivity package b/w express and mongodb)

//creating models, if you have 4 table/collection create 4 models
//creating collection structure
//now we create User model
//below 'Users' called collection name
var Users = mongoose.model('Users',{
    name:{

        type:String,
        require:true//mandatory
    },
    age:{
        type:Number
    },
    rollno:{
        type:Number
    },
    admno:{
        type:String
    },
    college:{
        type:String
    }
});
module.exports= {Users};//this is above var name eg: var Users