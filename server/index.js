const express = require('express')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())

const mongoose = require('./mongoose')
const book = require('./book')
console.log(new book())
const port = process.env.PORT || "3001";
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, PUT, DELETE')
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
    next();
});
app.get('/admin', async (req, res) => {
    await book.find({}, (err, ress) => {
        if (!err) {
            res.json(ress)
        }
    })
})
app.get('/',async (req, res) => {
    await book.find({}, (err, ress) => {
        if (!err) {
            res.json(ress)
        }
    })
})
app.post('/user', async (req, res) => {
    await mongoose.find({
        username: req.body.username,
        password: req.body.password
    }, function (err, ress) {
       
        if (err) {
            res.send('notlog')
        }
        else if (ress.length === 0) {
           
            res.send('username or password wodrng')
        }
        else if (req.body.username === 'jiang' && req.body.password === '123') {

            res.send('admin')


        }

        else {

            res.send('islog')
        }

    }
    )
})
app.post('/register', function (req, res) {
   
    new mongoose({
        username: req.body.username,
        password: req.body.password
    }).save(function (err, ress) {
        if (err) {
            res.send('fail')
        }
        else {
            res.send('saved')
        }
    })
})
app.post('/add', (req, res) => {
    
    new book({
        Fields: {
            author: req.body.author,
            title: req.body.title,
            jorunal: req.body.jorunal,
            year: req.body.year
        }
    }).save((err, ress) => {
        if (!err) {
            res.send('saved')
        }
    })
})
app.post('/dele', (req, res) => {
    
    book.findOneAndRemove(req.body, function (err, ress) {
        if (err) {
            console.log(err)
        }
        else {
            res.send('yes')
        }
    })

})


app.listen(3001, () => console.log(`Server running on localhost:${port}`));
