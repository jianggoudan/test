const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://admin:jj278819@cluster0.ghcbj.mongodb.net/ense?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, function (err, res) {
    if (err) {
        console.log('连接失败')
    }
    else {
        console.log('成功')
    }
})

var Schema=mongoose.Schema

var userInfo =new Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    saved:{type:String}
})
module.exports=mongoose.model('User',userInfo)
