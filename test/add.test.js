import axios from 'axios'

import add from '../src/components/add'

import { expect } from 'chai'
describe('data require test',function(){
    it('return an object',function(){
       
            axios.post('http://ense.herokuapp.com/add', {
                year: 123,
                title: 123,
                author: 123,
                journal: 123
            }).then(function (response) {
                expect(response).to.be.an('object')
            })
        
       
    })
})