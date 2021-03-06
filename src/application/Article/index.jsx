import React, { useEffect, useRef, useCallback, useState } from 'react';
import { ArticePage } from './style';
import { getArticleRequest } from '../../api/request';
import Comment from '../../baseUI/comment';
import Loading from '../../baseUI/Loading';
import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/tomorrow-night-bright.css';
import '../../markdown.css'

function Article(props) {

    const renderer = new marked.Renderer()

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        smartLists: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });

    const [articleData, setArticleData] = useState({});

    const articleMountedRef = useRef(false);

    const safeSetArticleData = res => articleMountedRef.current && setArticleData(res)

    const getArticleData = useCallback((aid) => {
        getArticleRequest(aid)
            .then(data => {
                safeSetArticleData(data);
            })
    }, [])

    useEffect(() => {
        articleMountedRef.current = true;
        return () => {
            articleMountedRef.current = false
        }
    })

    useEffect(() => {
        let last = props.location.pathname.split("/").pop()
        const aid = isNaN(last) ? '' : +last;
        getArticleData(aid);
    }, [props.location.pathname, getArticleData])


    return (
        <ArticePage>
            <div className="content">
                {
                    Object.values(articleData).length!==0 ?
                    <>
                        <div className="post-page">
                            <div className="post-container"></div>
                            <h1 className="post-title">{articleData.title}</h1>
                            <p className="post-meta">
                                <span className="date meta-item">发布于 {new Date(articleData.time * 1000).toLocaleString()}</span>
                            </p>
                            <p className="post-abstract"></p>
                            <div className="mdeditor"
                            dangerouslySetInnerHTML={{__html:marked(articleData.content)}}
                            ></div>
                        </div>
                        
                <div className="pagination">
                    {/* <p className="clearfix">
                        <span className="pre pagbuttons">
                            <a role="navigation" href="/" title="在linux下拨号上网(PPPoE)和开启无线热点"><i className="iconfont">&#xe7ed;</i>&nbsp;上一篇: 在linux下拨号上网(PPPoE)和开启无线热点</a>
                        </span>
                        <br />
                        <span className="next pagbuttons">
                            <a role="navigation" href="/" title="提取ArtStation自带模型查看器中的模型数据">下一篇: 提取ArtStation自带模型查看器中的模型数据 <i className="iconfont">&#xe7ee;</i></a>
                        </span>
                    </p> */}
                </div>
                <Comment pid={articleData.id} />
                </>
                : <Loading />
                }
            </div>
                    
        </ArticePage>
    )
}

export default React.memo(Article);