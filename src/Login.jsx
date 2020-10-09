import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './App.css';
import Signup from './Signup';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import Item from 'antd/lib/list/Item';
import {  hashHistory } from 'react-router';
import './config'

export default class Login extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            inputName: '',
            inputPsw: '',
            islogin: false
        }
    }

    change = (e) => {
        this.setState({
            inputName: e.target.value,


        })

    }
    changePsd = (e) => {

        this.setState({
            inputPsw: e.target.value
        })

    }
    changelog = () => {
        this.setState({
            isLogin: true
        })
    }
    log = () => {


        const history = this.props.history;
        let _this = this
        
        axios.post('http://localhost:3001/user', {
            username: this.state.inputName,
            password: this.state.inputPsw
        })
            .then(function (response) {
                if (response.data === 'islog') {
                    _this.setState({
                        isLogin: true
                    })
                    global.constants=_this.state.inputName
                    
                    alert('welcome '+global.constants)
                    return history.push('/');
                     
                }
                else if (response.data === 'admin') {
                    _this.setState({
                        isLogin: true
                    })
                    return history.push('/admin');
                }



            })
            .catch(function (error) {
                console.log(error);
            });


    }
    render() {

        const layout = {
            labelCol: {
                span: 8,
            },
            wrapperCol: {
                span: 16,
            },
        };
        const tailLayout = {
            wrapperCol: {
                offset: 8,
                span: 16,
            },
        };

        const Demo = () => {
            const onFinish = (values) => {
                console.log('Success:', values);
            };

            const onFinishFailed = (errorInfo) => {
                console.log('Failed:', errorInfo);
            };
        }
        return (
            <div className="login">
                <Router>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={Demo.onFinish}
                        onFinishFailed={Demo.onFinishFailed}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            value={this.state.inputName}
                            onChange={this.change}

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            value={this.state.inputPsw}
                            onChange={this.changePsd}

                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>

                            <Button type="primary" htmlType="submit" onClick={this.log}>
                                Log in
                        </Button>
                            <Link to="/signup">
                                <Button type="primary" htmlType="submit" style={{ marginLeft: 20 }}>
                                    Sign up
                        </Button >
                            </Link>
                        </Form.Item>
                    </Form>
                    <Route path="/Signup" exact component={Signup}></Route>
                </Router>
                <div>
                    login:    {this.state.isLogin ? 'successful' : 'fail'}
                </div>

            </div>
        )
    }
}