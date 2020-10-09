import React from 'react';
import { Input, DatePicker, Space, Cascader, Button } from 'antd';
import { List, Avatar } from 'antd';
import './App.css';
import Admin from './components/admin'
import axios from 'axios'
export default class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfInput: [<Input placeholder="enter a value" style={{ width: 150 }} />],
            description: '',
            show: '',
            bookList: [],
            time: []

        }
    }
    addInput = () => {
        const lists = this.state.numOfInput;

        lists.push(<Input placeholder="enter a value" style={{ width: 150 }} />)

        this.setState({ numOfInput: lists })



    }
    searchsome = (value, e) => {
        let _this = this
        let list = []
        axios.get('http://localhost:3001').then(function (response) {

            const data = response.data

            data.map((item, index) => {
                const des = item.Fields
                const bookTime = parseInt(item.Fields.year)
                // if (_this.state.time.length > 0) {
                //     const bookStart = parseInt(_this.state.time[0])
                //     const bookEnd = parseInt(_this.state.time[1])
                //     if (bookTime >= bookStart && bookTime <= bookEnd && item.title.search(value) !== -1 && item.author.search(value) !== -1 && item.journal.search(value) !== -1) {
                //         list.push(item)
                //         this.setState({
                //             bookList: list
                //         })
                //     }
                // }

                if (_this.state.time.length === 0) {

                    if (des.title.indexOf(value) >= 0) {

                        list.push(item)

                        _this.setState({
                            bookList: list
                        })

                    }
                } else {
                    const bookStart = parseInt(_this.state.time[0])
                    const bookEnd = parseInt(_this.state.time[1])
                    if (bookTime >= bookStart && bookTime <= bookEnd) {
                        if (des.title.indexOf(value) >= 0) {

                            list.push(item)

                            _this.setState({
                                bookList: list
                            })

                        }
                    }
                }

            })
            console.log(_this.state.bookList)
        })

    }
    // let list=[]
    // this.setState({
    //     bookList:[]
    // })
    // this.state.book.forEach(element => {
    //     if (element.article.search(value) !== -1 || element.author.search(value) !== -1
    //         || element.title.search(value) !== -1 || element.journal.search(value) !== -1) {
    //             list.push(element)
    //         this.setState({
    //             bookList: list
    //         })
    //     }
    // })


    handleSelectTime = (value, dateString) => {
        this.setState({
            time: dateString
        })

    }
    render() {

        const { Search } = Input;
        const { RangePicker } = DatePicker;
        const options = [
            {
                value: 'one',
                label: 'one',
                children: [
                    {
                        value: 'one.opne',
                        label: 'one.opne',

                    },
                ],
            },
            {
                value: 'two',
                label: 'two',
                children: [
                    {
                        value: 'two.two',
                        label: 'two.two',

                    },
                ],
            },
        ];


        function onChange(value) {
            console.log(value);
        }

        // let list=this.state.bookList.map((item,index)=>{
        // return <li>{item.author}{item.article}</li>
        // })https://stackoverflow.com/questions/29244731/react-router-how-to-manually-invoke-link

        return (
            <div>
                <div style={{ display: this.state.show }}>
                    <div className="bodyy">
                        <div>Description</div>
                        <div>
                            <Search className="search"
                                placeholder="input search text"
                                enterButton="Search"
                                size="middle"

                                // onSearch={value => {
                                //     this.state.book.forEach(element => {
                                //         if (element.article.search(value) !== -1||element.author.search(value)!==-1
                                //         ||element.title.search(value)!==-1||element.journal.search(value)!==-1) {
                                //             this.setState({
                                //                 bookList: this.state.bookList.push(element)
                                //             })
                                //         }

                                //     });
                                // }}
                                onSearch={this.searchsome}
                                style={{ width: 600 }}
                            />
                        </div>

                        <div className="datePicker">
                            <Space direction="vertical" size={12}>
                                <RangePicker onChange={this.handleSelectTime} style={{ width: 600 }} />

                            </Space>
                        </div>
                        <div className="conditon">
                            <div className="field">
                                <div>
                                    field
                    </div>
                                <div>
                                    <Cascader options={options} onChange={onChange} placeholder="Please select a field" />
                                </div>
                            </div>
                            <div className="operator">
                                <div>
                                    operator
                        </div>
                                <div>
                                    <Cascader style={{ width: 180 }} options={options} onChange={onChange} placeholder="Please select an operator" />
                                </div>
                            </div>
                            <div className="valuee">
                                <div>value</div>
                                {this.state.numOfInput.map((item, index) => {
                                    return item
                                })}
                                <div className="buttonn">
                                    <Button shape="circle" onClick={this.addInput}>
                                        +
                            </Button>
                                </div>
                                <div className="list">
                                    <List
                                        size='small'
                                        itemLayout="horizontal"
                                        dataSource={this.state.bookList}

                                        renderItem={(item, index) => (
                                            <List.Item >
                                                <List.Item.Meta

                                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                                    title={<a href="https://ant.design">{'title: ' + item.Fields.title}</a>}
                                                    description={'title: ' + item.Fields.title + ' year: ' + item.Fields.year + ' journal: ' + item.Fields.journal}

                                                >

                                                </List.Item.Meta>


                                            </List.Item>
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}