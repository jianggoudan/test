import React, { Component } from "react";

import { Menu } from "antd";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import logo from "../logo.svg";
import { HeartOutlined, StarOutlined, UserOutlined } from "@ant-design/icons";
import { withRouter } from "react-router-dom";
import Homepage from "../Homepage"
import Login from "../Login";
import Admin from './admin'
import Add from './add'
class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: '',
            user: 'user'
        };

    }
    
    handleClick = e => {
       
        this.setState({ 
            current: e.key,
            
        });
        

    };
 
    render() {
        withRouter(NavBar)
        const { current } = this.state;
        return (
            <Router >
                <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal" >
                    <Link to="/">
                        <div className="logo"><img src={logo} className="navbar-logo-brand" alt="logo" />SEER</div>
                    </Link>
                    <Menu.Item key="save" icon={<HeartOutlined />}>
                        <Link to="/save" />
                        My Saved Searches
                    </Menu.Item>
                    <Menu.Item key="rate" icon={<StarOutlined />}>
                        <Link to="/rate" />
                        My Ratings
                    </Menu.Item>

                    <Menu.Item key="user" icon={<UserOutlined />}  >
                        <Link to="/login" /> 
                        
                            {'welcome:  '+global.constants}                       
                    </Menu.Item>

                    <Menu.Item key="admin" icon={<UserOutlined />} style={{display:'none'}} >
                        <Link to="/admin" />              
                    </Menu.Item>
                    <Menu.Item key="add" icon={<UserOutlined />} style={{display:'none'}} >
                        <Link to="/add" />              
                    </Menu.Item>
                    
                </Menu>

                <Route path="/" exact component={Homepage} />
                {
                    /* <Route path="/login" exact component={Save}></Route> https://reactrouter.com/web/api/history
                    <Route path="/save" exact component={Rate}></Route> */
                }
                <Route path="/login" exact component={Login}  />
                <Route path="/admin" exact component={Admin} />
                <Route path="/add" exact component={Add} />
                

            </Router>
        );
    }
}

export default NavBar;
