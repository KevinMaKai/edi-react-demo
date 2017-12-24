import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink } from 'react-router';

// 引入Antd组件
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: '1',
            openKeys: []
        }
    }    
 
    render() {
        return (
            <div id="leftMenu"> 
                <img src={require('../images/logo.png')} width="50" id="logo"/>  {/*logo图标*/}  

                <Sider width={240} style={{ background: '#fff' }}>              
                <Menu  
                     mode="inline"
                     defaultSelectedKeys={['1']}
                     defaultOpenKeys={['sub2']}
                     style={{ height: '100%' }}>
                    <Menu.Item key="1">                    
                        <IndexLink to="/"><span><Icon type="home" /><span>欢迎页</span></span></IndexLink>
                    </Menu.Item>    
                    <SubMenu key="sub2" title={<span><Icon type="appstore-o" /><span>Protocol Configuration</span></span>}>
                        <Menu.Item key="2"><Link to="/as2">AS2</Link></Menu.Item>
                        <Menu.Item key="21"><Link to="/ftp">FTP/SFTP</Link></Menu.Item>
                        <Menu.Item key="22"><Link to="/oftp">OFTP</Link></Menu.Item>
                        <Menu.Item key="23"><Link to="/webservice">WEBSERVICE</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="bars" /><span>导航二</span></span>}>
                        <Menu.Item key="3"><Link to="/campaign">广告系列</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="bar-chart" /><span>导航三</span></span>}>
                        <Menu.Item key="4"><Link to="/counter">Reflux起步</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/charts">施工中</Link></Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                        <Link to="/last"><span><Icon type="mail" /><span>结尾页</span></span></Link>
                    </Menu.Item>
                </Menu>
                </Sider>

                <div id="copyright">Copyright © JD.com</div>                    
            </div>                
        )
    }
}