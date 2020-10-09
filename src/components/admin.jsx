import React, { Component } from "react";
import { Button } from 'antd';
import axios from 'axios'
import { List, Avatar } from 'antd';
export default class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bookList: [],
            reload:true
        }
    }
    componentWillMount() {
        let _this = this

        axios.get('https://ense.herokuapp.com/admin')
            .then(function (response) {
                _this.setState({
                    bookList: response.data
                })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    dele = (index) => {
        
       
       let _this=this
        axios.post('http://ense.herokuapp.com/dele', {
            Fields:this.state.bookList[index].Fields

        }).then(function (response) {
           
                if(response.data==='yes')
                {   
                    axios.get('http://ense.herokuapp.com/admin')
            .then(function (response) {
                _this.setState({
                    bookList: response.data
                })

            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
                
                }
        })
            .catch(function (error) {
                console.log(error);
            });
    }
 
    render() {


        return (
            <div>
                <List
                    size='small'
                    itemLayout="horizontal"
                    dataSource={this.state.bookList}

                    renderItem={(item, index) => (
                        <List.Item >
                            <List.Item.Meta
                                
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{'title: '+item.Fields.title}</a>}
                                description={'authot: '+item.Fields.author + ' year: ' + item.Fields.year + ' journal: ' + item.Fields.journal}
                               
                            >
                               
                            </List.Item.Meta>
                            <Button type="primary" onClick={()=>this.dele(index)} >delete</Button>
                            {/* <Button type="primary" onClick={this.dele(index)} >delete</Button> */}

                        </List.Item>
                    )}
                />
                <div><Button type="primary" href='./add' >add</Button></div>

            </div>

        )
    }

}