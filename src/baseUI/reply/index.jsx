import React from 'react';
import marked from 'marked';
import styled from 'styled-components'

const Reply = styled.div`
    color: #666;
    margin-top: 1em;
    padding-left: 1em;
    border-left: 1px dashed hsla(0,0%,93%,.5);
`

// 评论回复
function ReplyComponent(props) {
    const {item} = props
    return (
        <Reply>
            {
                item.child && item.child.map((item2,index2)=>{
                    return (
                        <div className="vcard" key={index2}>
                            <img className="vimg" src={require('../../assets/images/comment/avatar_default.png')} alt="" />
                            <div className="vh">
                                <div className="vhead">
                                    <span className="vnick">{item2.author}</span>
                                </div>
                                <div className="vmeta">
                                    <span className="vtime">{new Date(item2.time*1000).toLocaleString()}</span>
                                    <span className="vat">回复</span>
                                </div>
                                <div className="vcontent">
                                    <div className="mdeditor"
                                    dangerouslySetInnerHTML={{__html:marked(item2.content)}}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </Reply>
    )
}

export default React.memo(ReplyComponent);