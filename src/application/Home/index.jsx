import React, { useState, useEffect, useCallback } from 'react';
import { MainContent, Pagination } from './style';
import { Link } from 'react-router-dom'
import { getHomeMsgRequest } from '../../api/request';
import { useRef } from 'react';
import Loading from '../../baseUI/Loading';
import ReactMarkdown from 'react-markdown';
// import { array } from 'prop-types';

function Home(props) {
    const show= props[0];
    const setShow = props[1];
    const mountedRef = useRef(false);

    const safeSetMsgData = res => mountedRef.current && setMsgData(res);

    const [msgData, setMsgData] = useState({});

    const getMsgData = useCallback((page) => {
        getHomeMsgRequest(page)
        .then(data=>{
            if(data.code === 200) {
                safeSetMsgData(data.data);
            }
        })
    },[])

    useEffect(()=>{
        mountedRef.current = true;
        return (()=>{
            mountedRef.current = false;
        })
    })

    useEffect(()=>{
        let last = props.location.pathname.split("/").pop()
        const page = isNaN(last) ? 1 : +last;
        getMsgData(page);
    },[props.location.pathname,getMsgData])

    return (
        <MainContent>
            <div className="content">
                {
                    msgData.data ? msgData.data.map((item, index) => {
                        return (
                            <div className="post-container" key={index}>
                                <p className="post-title">
                                    <Link to={"/post/" + item.id} onClick={()=>{setShow(!show)}}>{item.title}</Link>
                                </p>
                                <p className="post-meta">
                                    <span className="date meta-item">发布于 {new Date(item.time*1000).toLocaleString()}</span>
                                    <span className="meta-item">
                                        <i></i>
                                        <span> </span>
                                        <Link to="/" title="lab" className="a-tag">lab</Link>
                                        <span> </span>
                                    </span>
                                    <span className="meta-item">
                                        <i></i>
                                        <span> </span>
                                        <Link to="/" title="3D" className="a-tag">JS</Link>
                                        <span> </span>
                                        <Link to="/" title="破解" className="a-tag">技术</Link>
                                        <span> </span>
                                    </span>
                                </p>
                                <div className="post-abstract">
                                    <ReactMarkdown
                                    className="mdeditor"
                                    source={item.content}
                                    escapeHtml={false}
                                    />
                                </div>
                            </div>
                        )
                    }) : <Loading />
                }
                <Pagination>
                    <p>第 {msgData.current_page} 页 / 共 {msgData.last_page} 页 </p>
                    <p>
                        <span className="pre pagbuttons">
                            <i className="iconfont">&#xe7ed;</i>
                            <Link to={"/home/page/"+(msgData.current_page > 1 ? msgData.current_page - 1 : 1)} role="navigation" onClick={()=>{setShow(!show)}}>上一页</Link>
                        </span>
                        <span> </span>
                        <span className="next pagbuttons">
                            <Link role="navigation" to={"/home/page/"+(msgData.current_page < msgData.last_page ? msgData.current_page + 1 : msgData.last_page)} onClick={()=>{setShow(!show)}}>下一页</Link> 
                            <i className="iconfont">&#xe7ee;</i>
                        </span>
                    </p>
                </Pagination>
            </div>
        </MainContent>
    )
}

export default React.memo(Home);

