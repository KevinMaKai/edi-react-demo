import React from 'react';
import createHistory from 'history/lib/createHashHistory';
import {Select,Layout, Menu, Breadcrumb, Icon } from 'antd';
const Option = Select.Option;
const history = createHistory();

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange = (v) => {
        if(v === '退出') {
            history.push('/login');
        }
    }
    render() {
        let logoutWrap = {
            textAlign: 'right',
            paddingRight: 25,
            borderBottom: '1px solid #ddd',
            paddingBottom: 20
        }
        return (
            <div style={logoutWrap}>
                <div style={{float:'left',paddingLeft:'300px',paddingTop:'20px'}}>EDI-SOFTWARE</div>
                <Select defaultValue="超级管理员" size="large">
                    <Option value="超级管理员">超级管理员</Option>
                    <Option value="退出">退出</Option>
                </Select>
            </div>
        );
    }
}

