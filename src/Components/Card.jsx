import React from 'react';
import { Button, Card, Flex, Typography } from 'antd';
import Meta from 'antd/es/card/Meta';
const cardStyle = {
  width: 500,justify:'center'
}
export const CardC = () => (
//   <Card
//     hoverable
//     style={cardStyle}
//     styles={{
//         display:'flex',align:'center',
//     background:'#000'
//     }}
//   >
    <Flex justify="center" style={{background:'black',marginTop:'10px',borderRadius:'10px',boxShadow: '0px 0px 0.2rem #fff'}}>
      
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
            color:'white',
           padding: 32,
        }}
      >
      
        <Typography.Title level={5} style={{ color:'white',}}
        >
          Todo Done <br></br>
            <span level={1}>
            Keep It Up

            </span>

        </Typography.Title>
       
      </Flex>
      <Flex
        vertical
        align="flex-end"
        justify="space-between"
        style={{
            marginTop:'30px',
            height:'100px',width:'100px',
           padding: 32,borderRadius:'50%',border:'1px solid black',background:'rgb(240 38 38)'
        }}
      >
      
        <Typography.Title level={5} justify='center' style={{display:'flex',color:'wheat',justifyContent:'center',alignItems:'center',textAlign:'center'}}
        >
          1/3

        </Typography.Title>
       
      </Flex>
      <Flex>
    
     
      </Flex>
    </Flex>
//   </Card>
);
