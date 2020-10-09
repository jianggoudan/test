const { expect } = require('chai')
const mongoose = require('mongoose')
var book = require('../server/book')
describe('test mongoose module', function () {
    it('return an object', function () {
        expect(new book()).to.be.an('object')
    })
})


describe('test database connection', function () {
    it('test connection', function (done) {
     mongoose.connect('mongodb+srv://admin:jj278819@cluster0.ghcbj.mongodb.net/ense?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true
        },  function test (err, res) {
            if (err) {
                done(err)

            }
            else {
                mongoose.disconnect()
               done()
            }
            
        } )
       
       
    })
})




