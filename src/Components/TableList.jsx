import React, { useEffect, useState } from 'react';
import { Avatar, Button, Col, Flex, Input, List, Row, Skeleton, Space } from 'antd';
import { CheckCircleOutlined, DeleteOutlined, EditOutlined, HarmonyOSOutlined, HeartOutlined, PlusCircleOutlined, SunOutlined } from '@ant-design/icons';
import { CardC } from './Card';
const count = 3;
// const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
const fakeDataUrl = `http://localhost:8080/todos`;
export const Lists = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  const {edit,setEdit}=useState(true);
  const {editID,setEditId}=useState(null);
  
  useEffect(() => {
  
    callApi()
    // await fetch(fakeDataUrl)
    //   .then((res) =>{
    //      console.log(res.json())
    //     res.json()
    //   })
    //   .then((res) => {
    //     setInitLoading(false);
    //     setData(res.results);
    //     setList(res.results);
    //   });
  }, [data]);

  const callApi=async()=>{
    let data=await fetch('http://localhost:8080/todos');
    let res=await data.json();
    console.log('res',res)
    setList(res);
    // setData(res);
  }

  // const onLoadMore = () => {
  //   setLoading(true);
  //   setList(
  //     data.concat(
  //       [...new Array(count)].map(() => ({
  //         loading: true,
  //         name: {},
  //         picture: {},
  //       })),
  //     ),
  //   );
  //   fetch(fakeDataUrl)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const newData = data.concat(res.results);
  //       setData(newData);
  //       setList(newData);
  //       setLoading(false);
  //       // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
  //       // In real scene, you can using public method of react-virtualized:
  //       // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
  //       window.dispatchEvent(new Event('resize'));
  //     });
  // };

  const editDeleteCartHandler=(type,id)=>{
    if(type=='cart'){
      console.log('----',type,id)

    }
    if(type=='edit'){
      // setEdit(edit=>!edit)
        //  setEditId(id)
      console.log(type,id)
    }
  if(type=='delete'){
      console.log(type,id)


    }
  }
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button 
        // onClick={onLoadMore}
        >loading more</Button>
      </div>
    ) : null;
  return (
    <>

        {/* <Col span={12}> */}
        <Row align='middle' justify='center'>
        <Col span={12}>
          <CardC/>
        </Col>
        </Row>
    <Row align='middle' justify='center'>
    <Col span={12}>
    <Row align='middle' justify='center'>
    <Space.Compact direction="horizontal"
    style={{
      marginTop:'10px',
      width: '50%',color:'white'
      
    }}>
        <Input
          style={{  height:'40px',background:'black',boxShadow:'0px 0px .2rem #fff',color:'white'}}
          placeholder="Enter You'r Task"
        />
        <br></br>
        <Button
          style={{
            height:'40px',
            background:'rgb(240, 38, 38)',
            // marginLeft:'10px',
            width: 80,
          }}>
         
          <PlusCircleOutlined style={{color:'white'}}/>
        </Button>
      </Space.Compact>
   {/* <Space.Compact
      style={{
        marginTop:'10px',
        width: '50%',
      }}
    >
      <Input placeholder="Enter You'r Task" />
      <Button type="primary">

      <PlusCircleOutlined/>
      </Button>
    </Space.Compact> 
     */}
   </Row>
    <List style={{color:'white'}}
      className="demo-loadmore-list" 
      // loading={initLoading}
    itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}

      renderItem={(item,id) => (
        <List.Item style={{color:'white',fontSize:'15px',boxShadow:'0px 0px 0.2rem #fff',padding:'5px',borderRadius:'10px',margin:'10px'}}
          actions={
            [<EditOutlined disabled={true} style={{cursor: 'not-allowed',fontSize:'18px',color:'white'}}
            onClick={e=>{editDeleteCartHandler('edit',id)}}/>,
            <HeartOutlined  onClick={e=>{editDeleteCartHandler('cart',id)}} 
              style={{fontSize:'18px',color:'white'}}/>,
             <DeleteOutlined style={{fontSize:'18px',color:'white'}}
             onClick={e=>{editDeleteCartHandler('delete',id)}}/>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active >
            {item.status=='done' && item.status!=""?
            <List.Item.Meta style={{color:'white',display:'contents'}}
                  
                avatar={<CheckCircleOutlined style={{padding:'20px',fontSize:"25px",color:"#09fb09"}}/>}
                description={<span style={{marginTop:'20px',color:'white',textDecoration: 'line-through'}} >{item.description}
                  </span>}
                  
                />
                :
                <>
                <List.Item.Meta style={{color:'white',display:'contents'}}
                  
                  avatar={<span style={{cursor:'pointer',padding:'20px',fontSize:'25px',color:'red'}}>&#9711;</span>}
                  description={<span style={{marginTop:'20px',color:'white'}} >{item.description}
                  </span>}
                  
                  />
                  </>
                
            }
              
              
            
            
            
          </Skeleton>
        </List.Item>
      )}
      /> 
    </Col>
   
  </Row>
{/* </Space> */}
    {/* </div> */}
     
     
      </>

  );
};
