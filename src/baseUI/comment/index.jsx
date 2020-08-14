import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Comment } from './style';
import { getCommentsRequest } from '../../api/request';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../assets/CodeBlock';
// import style from '../../assets/global-style';
// import PropTypes from "prop-types";

// 处理函数组件拿不到ref的问题,所以用forwardRef
const CommentContainer = React.forwardRef((props, ref) => {
    const { pid } = props;

    const [comments,setCommentsData] = useState({});
    const [page, setPage] = useState(1);

    const commentsMountedRef = useRef(false);

    const safeSetCommentsData = res => commentsMountedRef && setCommentsData(res);

    const veditor = useRef()

    const getCommentsData = useCallback((pid,page) => {
        getCommentsRequest(pid,page)
        .then(res => {
            if(res.code === 200) {
                safeSetCommentsData(res.data);
            }
        })
    },[])

    useEffect(()=>{
        commentsMountedRef.current = true;
        return ()=>(commentsMountedRef.current = false)
    })

    useEffect(()=>{
        getCommentsData(pid,page)
    },[getCommentsData,page,pid])

    

    return (
        <Comment>
            <div className="vwrap">
                <div className="vheader item3">
                    <input type="text" name="nick" placeholder="昵称" className="vnick vinput" />
                    <input type="email" name="mail" placeholder="邮箱" className="vmail vinput" />
                    <input type="text" name="link" placeholder="网址(http://)" className="vlink vinput" />
                </div>
                <div className="vedit">
                    <textarea ref={veditor} id="veditor" className="veditor vinput" placeholder="Just Go Go" onChange={
                        () => {
                            veditor.current.style = `height:${veditor.current.scrollHeight}px;overflow:hidden;overflow-wrap: break-word;resize:none;`
                        }
                    }></textarea>
                    <div className="vctrl">
                        <span className="vemoji-btn">表情</span> | <span className="vpreview-btn">预览</span>
                    </div>
                    <div className="vemojis hide"></div>
                    <div className="vinput vpreview hide"></div>
                </div>
                <hr size="1"></hr>
                <div className="vcontrol">
                    <div className="col">
                        <a href="/">
                            <svg className="markdown" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15 13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4 8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z"></path></svg>
                        </a>
                    </div>
                    <div className="col">
                        <button type="button" className="vsubmit vbtn">回复</button>
                    </div>
                </div>
                <div className="vmark"></div>
            </div>
            <div className="vinfo">
                <div className="vcount col">
                    <span className="vnum">{comments ? comments.total : 0}</span>
                    评论(功能测试中)
                </div>
            </div>
            <div className="vlist">
                <div className="vcard">
                    <img className="vimg" src={require('../../assets/images/comment/avatar_default.png')} alt="" />
                    <div className="vh">
                        <div className="vhead">
                            <span className="vnick">Anonymous</span>
                        </div>
                        <div className="vmeta">
                            <span className="vtime">2020-07-23</span>
                            <span className="vat">回复</span>
                        </div>
                        <div className="vcontent">
                            <p>这个主题真好看，进来学习学习</p>
                        </div>
                        <div className="vquote">
                            <div className="vcard">
                                <img className="vimg" src={require('../../assets/images/comment/avatar_default.png')} alt="" />
                                <div className="vh">
                                    <div className="vhead">
                                        <span className="vnick">Anonymous</span>
                                    </div>
                                    <div className="vmeta">
                                        <span className="vtime">2020-07-23</span>
                                        <span className="vat">回复</span>
                                    </div>
                                    <div className="vcontent">
                                        <p>这个主题真好看，进来学习学习</p>
                                    </div>
                                    <div className="vquote"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    comments.data && Object.values(comments.data).map((item, index) => {
                        return (
                            <div className="vcard" key={index}>
                                <img className="vimg" src={require('../../assets/images/comment/avatar_default.png')} alt="" />
                                <div className="vh">
                                    <div className="vhead">
                                        <span className="vnick">{item.author}</span>
                                    </div>
                                    <div className="vmeta">
                                        <span className="vtime">{new Date(item.time*1000).toLocaleString()}</span>
                                        <span className="vat">回复</span>
                                    </div>
                                    <div className="vcontent">
                                    <ReactMarkdown
                                        className="mdeditor"
                                        source={item.content}
                                        escapeHtml={false}
                                        renderers={{
                                            code: CodeBlock
                                        }}
                                    //   plugins={[toc]}
                                    />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="vempty"></div>
            <div className="vpage txt-center">
                <button type="button" className="vmore vbtn" onClick={()=>{
                    console.log(comments)
                }}>查看更多…</button>
            </div>
            <div className="info"></div>
        </Comment>
    )
})

export default React.memo(CommentContainer);