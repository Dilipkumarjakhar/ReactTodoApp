import React from 'react'
import { Breadcrumb, Layout, Menu, Space, theme } from 'antd';

import { Lists } from '../TableList';
import { DeleteOutlined, HeartOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;
const items =[
  {key: '1',label:'TodoApp'},
  {key: '2',label:<HeartOutlined />},
  {key: '3',label:<DeleteOutlined />}
  ]
export const NavBar = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
         <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        /> 
        {/* <Menu>TodoApp</Menu> */}
      </Header>
       <Content style={{background:'black',color:'white'}}>

       {/* <Space direction="vertical" align="center"> */}


       <Lists />
        
{/* </Space> */}
        
       
      </Content>
      
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

  

