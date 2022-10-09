const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Must provide a name'],
        trim:true,
        maxlength:[20 ,'Name cannot be mor than 20 character']
    },
    completed:{
        type:Boolean,
        default: false
    }    
}) //Validation run on console not giving response to client

module.exports = mongoose.model('Task', TaskSchema)