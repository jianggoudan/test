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

// //var book=mongoose.model('Book')
// book.find(function(err,res){
//     if(err)
//     {
//         console.log('err')
//     }
//     console.log(res)
// })
var Schema=mongoose.Schema

var Books =new Schema({
    ObjectType:String,
    EntryType:String,
    EntryKey:String,
    Fields:{
        author:String,
        title:String,
        note:String,
        owner:String,
        timestamp:String,
        url:String,       
        journal:String,
        year: String,
        eprint: String,
        eprinttype: String,
        eprintclass:String,
        pages: String,
        month: String,
        annote: String
    }
        

    
})
module.exports=mongoose.model('Book',Books)

// var q=test.find({
   
// },function(err,res){
//     if(!err)
//     {
        
//         console.log(res.forEach((item,index)=>{
//             console.log(item.EntryKey+index)
//         }))
//     }
    
// })

//module.exports=mongoose.model('Book',Books)
