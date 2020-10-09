import React from 'react'
import { useState } from 'react';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import { Redirect,hashHistory } from 'react-router';
export default class Signup extends React.Component {
    constructor()
    {
        super()
        this.state={
            singuser:'',
            singpsw:'',
            isRegi:null
        }
    }
    signusername=(e)=>{
        
        this.setState({
            singuser:e.target.value
        })
    }
    signpassword=(e)=>{
       
        this.setState({
            singpsw:e.target.value
        })
    }
    register=()=>{
        let _this=this
        const history = this.props.history;
       
       axios.post('http://ense.herokuapp.com/register',{
           username:this.state.singuser,
           password:this.state.singpsw
       }).then(function (response) {
        if(response.data==='saved'){
            _this.setState({
                isRegi:true
            })
            return history.push('/');
        }else{
            _this.setState({
                isRegi:false
            })
        }
      })
      .catch(function (error) {
        console.log(error);
      });
       
    }
    render() {
        const { Option } = Select;
        const AutoCompleteOption = AutoComplete.Option;

        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24,
                },
                sm: {
                    span: 8,
                },
            },
            wrapperCol: {
                xs: {
                    span: 24,
                },
                sm: {
                    span: 16,
                },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        const RegistrationForm = () => {
            const [form] = Form.useForm();

            const onFinish = (values) => {
                console.log('Received values of form: ', values);
            };

            const prefixSelector = (
                <Form.Item name="prefix" noStyle>
                    <Select
                        style={{
                            width: 70,
                        }}
                    >
                        <Option value="86">+86</Option>
                        <Option value="87">+87</Option>
                    </Select>
                </Form.Item>
            );
            const [autoCompleteResult, setAutoCompleteResult] = useState([]);

            const onWebsiteChange = (value) => {
                if (!value) {
                    setAutoCompleteResult([]);
                } else {
                    setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
                }
            };

            const websiteOptions = autoCompleteResult.map((website) => ({
                label: website,
                value: website,
            }));
        }
        return (
            <div>
                <Form
                    {...formItemLayout}
                   
                    name="register"
                   
                    
                    scrollToFirstError
                >
                    <Form.Item
                        name="username"
                        label="username"
                        value={this.state.singuser}
                        onChange={this.signusername}
                        
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={['password']}
                        value={this.state.singpsw}
                        onChange={this.signpassword}
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please confirm your password!',
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject('The two passwords that you entered do not match!');
                                },
                            }),
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        name="agreement"
                        valuePropName="checked"
                        rules={[
                            {
                                validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                            },
                        ]}
                        {...tailFormItemLayout}
                    >
                        <Checkbox>
                            I have read the <a href="https://www.w3schools.com/">agreement</a>
                        </Checkbox>
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" onClick={this.register}>
                            Register
                         </Button>
                    </Form.Item>
                </Form>
               

            </div>
        )
    }
}