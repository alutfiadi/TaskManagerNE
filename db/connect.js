const mongoose = require('mongoose')
// const connectionString = 
// 'mongodb+srv://lutfiadi:WXR20wF8HrgwqwD6@nodeexpressprojects.ftfbaq4.mongodb.net/TaskManager?retryWrites=true&w=majority'
// const local = 'mongodb://localhost:27017/TaskManager'

const connectDB = (url) => {
    return mongoose
            .connect(url, {
                useNewUrlParser: true,
                useCreateIndex:true,
                useFindAndModify:false,
                useUnifiedTopology:true,
            })
            // .then(()=>console.log('CONNECTED TO THE DB...'))
            // .catch((err)=>console.log(err))

}

module.exports = connectDB
