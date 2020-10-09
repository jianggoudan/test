import React, { Component } from "react";

import axios from 'axios'
import {
    Form, Input, Button, Checkbox,

    Tooltip,
    Cascader,
    Select,
    Row,
    Col,


    AutoComplete,
} from 'antd';
export default class Add extends React.Component {
    constructor() {
        super()
        this.state = {
            title: '',
            author: '',
            year: '',
            journal: ''
        }
    }

    changeauthor = (e) => {
        this.setState({
            author: e.target.value
        })
    }

    changejournal = (e) => {
        this.setState({
            journal: e.target.value
        })
    }
    changetitle = (e) => {
        this.setState({
            title: e.target.value
        })
        console.log(e.target.value)
    }
    changeyear = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    submitdata = () => {
        let _this = this
        const history = this.props.history;

        axios.post('http://ense.herokuapp.com/add', {
            year: this.state.year,
            title: this.state.title,
            author: this.state.author,
            journal: this.state.journal
        }).then(function (response) {
            if(response.data==='saved')
            {
               return ('save successfully')
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {

        const layout = {
            labelCol: { span: 8 },
            wrapperCol: { span: 16 },
        };
        const tailLayout = {
            wrapperCol: { offset: 8, span: 16 },
        };
        return (
            <div>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}

                >
                    <Form.Item
                        label="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.changetitle}
                        
                        rules={[{ required: true, message: 'Please input title!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="author"
                        name="author"
                        value={this.state.author}
                        onChange={this.changeauthor}
                        
                        rules={[{ required: true, message: 'Please input your author!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="year"
                        name="year"
                        value={this.state.year}
                        onChange={this.changeyear}
                       
                        rules={[{ required: true, message: 'Please input your year!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="journal"
                        name="journal"
                        value={this.state.journal}
                        onChange={this.changejournal}
                        
                        rules={[{ required: true, message: 'Please input your journal!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" onClick={this.submitdata}>
                            Submit
        </Button>
                    </Form.Item>
                </Form>


            </div>
        )
    }
}