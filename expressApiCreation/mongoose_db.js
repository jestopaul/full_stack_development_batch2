

var mongoose = require('mongoose');


mongoose.Promise = global.Promise;//connecting statements
//below we write connecting statements
//Users is db name for connecting
mongoose.connect('mongodb://localhost:27017/Users',{useNewUrlParser:true});
module.exports = {
    //we get these mongoose connection in other js mongoose used by this export
    mongoose:mongoose
}