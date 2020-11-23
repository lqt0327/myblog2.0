import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Table, Space, Button } from 'antd';
import { Pagination } from 'antd';
import styled from 'styled-components';
import { getHomeMsgRequest, deleteArticleRequest } from '../../../api/request';

export const Page = styled.div`

`

function List(props) {

    const goPage = props[0]

    const mountedRef = useRef(false);
    const [update,setUpdate] = useState(false);

    const safeSetMsgData = res => mountedRef.current && setMsgData(res);

    const [msgData, setMsgData] = useState({});
    const [page, setPage] = useState(1);

    const getMsgData = useCallback((page) => {
        getHomeMsgRequest(page)
        .then(data=>{
            if(data.code === 200) {
                for(let i = 0; i < data.data.data.length; i++) {
                    data.data.data[i].key = i
                }
                safeSetMsgData(data.data);
            }
        })
    },[])

    useEffect(()=>{
        mountedRef.current = true;
        return ()=>{
            mountedRef.current = false;
        }
    })

    useEffect(()=>{
        getMsgData(page);
    },[page,getMsgData,update])

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            render: time => <span>{new Date(time*1000).toLocaleString()}</span>
        },
        {
            title: 'Action',
            dataIndex:'id',
            key: 'action',
            render: (id) => (
                <Space size="middle">
                    <Button onClick={()=>{goPage('/update/'+id)}}>更新</Button>
                    <Button onClick={()=>{
                        deleteArticleRequest(id)
                        .then(data=>{
                            setUpdate(!update);
                            console.log(data.msg)
                        })
                    }
                    }>删除</Button>
                </Space>
            ),
        },
    ];

    return (
        <Page>
            <Table
              columns={columns}
              dataSource={msgData.data ? msgData.data : ""}
              pagination={false}
              />
              <Pagination defaultCurrent={1} total={msgData.data ? msgData.total : 0} onChange={(e)=>setPage(e)} />
        </Page>
    )
}

export default React.memo(List);