import React, { useState, useEffect, useCallback } from 'react';
import { MainContent, Pagination } from './style';
import { Link } from 'react-router-dom'
import { getHomeMsgRequest } from '../../api/request';
import { useRef } from 'react';
import Loading from '../../baseUI/Loading';
import marked from 'marked'

function Home(props) {

    const show= props[0];
    const setShow = props[1];
    const mountedRef = useRef(false);

    const safeSetMsgData = res => mountedRef.current && setMsgData(res);

    const [msgData, setMsgData] = useState([]);

    const getMsgData = useCallback((page) => {
        getHomeMsgRequest(page)
        .then(data=>{
            // 去除特殊字符 解决字体排版问题
            for(let v of data.data) {
                v.a_content = v.a_content.replace(/[\s#]*/g,"")
            }
            safeSetMsgData(data);
        })
    },[])

    useEffect(()=>{
        mountedRef.current = true;
        return ()=>{
            mountedRef.current = false;
        }
    })

    useEffect(()=>{
        // parseInt 防止在类似 /page/  /page/1.1 这类url时出错
        let last = parseInt(props.location.pathname.split("/").pop())
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
                                    <Link to={"/post/" + item.a_id} onClick={()=>{setShow(!show)}}>{item.a_title}</Link>
                                </p>
                                <p className="post-meta">
                                    <span className="date meta-item">发布于 {new Date(item.a_time*1000).toLocaleString()}</span>
                                    <span className={item.a_keywords ? "meta-item" : "hide"}>
                                    <i className="iconfont">&#xe86f;</i>
                                        <span> </span>
                                            {item.a_keywords}
                                        <span> </span>
                                    </span>
                                    <span className="meta-item">
                                        <i className="iconfont">&#xe86e;</i>
                                        <span> </span>
                                        <Link to={"/catelist/"+item.c_id} title={item.c_catename} className="a-tag">{item.c_catename}</Link>
                                        <span> </span>
                                    </span>
                                </p>
                                <div className="post-abstract">
                                    <div
                                    dangerouslySetInnerHTML={{__html:marked(item.a_content)}}
                                    >
                                    </div>
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
                            <Link role="navigation" to={"/home/page/"+(msgData.current_page < msgData.last_page ? parseInt(msgData.current_page) + 1 : msgData.last_page)} onClick={()=>{setShow(!show)}}>下一页</Link> 
                            <i className="iconfont">&#xe7ee;</i>
                        </span>
                    </p>
                </Pagination>
            </div>
        </MainContent>
    )
}

export default React.memo(Home);

