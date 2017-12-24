import React from 'react';
import { Modal, Button ,Tabs,Table, Icon, Divider} from 'antd';


 

import './profile.less';

const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
  }

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a href="#">{text}</a>,
  }, {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  }, {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="#">Action 一 {record.name}</a>
        <Divider type="vertical" />
        <a href="#">Delete</a>
        <Divider type="vertical" />
        <a href="#" className="ant-dropdown-link">
          More actions <Icon type="down" />
        </a>
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  }, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  }];
  
  
/*简介父组件*/
export default class Profile extends React.Component {
    state = {
        ModalText: 'Content of the modal',
        visible: false,
        confirmLoading: false,
      }
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
      
      handleOk = () => {
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      }
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      }
      
      render() {
        const { visible, confirmLoading, ModalText } = this.state;
        return (
          <div style={{paddingTop:'60px',paddingLeft:'20px'}}>
            <Button type="primary" onClick={this.showModal}>新增</Button>
            <Modal title="Title"
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
            >
               <Tabs onChange={callback} type="card">
    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
  </Tabs>
            </Modal>

            <div>
          <Table dataSource={data} columns={columns} ></Table>
          </div>
          </div>
          
        );
    }    
}
