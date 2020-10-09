const { expect } = require('chai')

var mongo = require('../server/mongoose')
describe('test mongoose module', function () {
    it('return an object', function () {
        expect(new mongo()).to.be.an('object')
    })
})







