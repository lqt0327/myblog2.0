import React, { useEffect, useRef, useCallback, useState } from 'react';
import { AboutPage } from './style';
import ReactMarkdown from 'react-markdown';
import CodeBlock from '../../assets/CodeBlock';
// import testMd from "../../md/article.md";
import aboutme from "../../md/aboutme.md";
import Comment from '../../baseUI/comment'


function Abouts(props) {
    const [md, setMD] = useState('')

    const mountedRef = useRef(false);

    const setSafeMD = userCollection => mountedRef.current && setMD(userCollection)

    useEffect(()=>{
        mountedRef.current = true;
        return () => (mountedRef.current=false)
    })

    const fetchData = useCallback(()=>{
        fetch(aboutme)
        .then(res => res.text())
        .then(text => {setSafeMD(text)});
    },[])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    
    return (
        <AboutPage>
            <div className="content">
                <div className="post-page">
                    <div className="post-container"></div>
                    <h1 className="post-title">关于</h1>
                    <p className="post-meta">
                        <span className="date meta-item">发布于 2020-8-12</span>
                    </p>
                    <p className="post-abstract"></p>
                    <ReactMarkdown
                        className="mdeditor"
                        source={md}
                        escapeHtml={false}
                        renderers={{
                            code: CodeBlock
                        }}
                        //   plugins={[toc]}
                    />
                </div>
                <Comment />
            </div>

        </AboutPage>
    )
}

export default Abouts;