import React, { useEffect, useRef, useCallback, useState } from 'react';
import { AboutPage } from './style';
// import testMd from "../../md/test.md";
import aboutme from "../../md/aboutme.md";
import Comment from '../../baseUI/comment'
import marked from 'marked'
import hljs from "highlight.js"
import 'highlight.js/styles/monokai-sublime.css';
import '../../markdown.css'

function Abouts(props) {

    const renderer = new marked.Renderer()

    marked.setOptions({
        renderer: renderer,
        gfm: true,
        smartLists: true,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });

    const [md, setMD] = useState('')

    const mountedRef = useRef(false);

    const setSafeMD = userCollection => mountedRef.current && setMD(userCollection)

    useEffect(() => {
        mountedRef.current = true;
        return () => (mountedRef.current = false)
    })

    const fetchData = useCallback(() => {
        fetch(aboutme)
            .then(res => res.text())
            .then(text => { setSafeMD(text) });
    }, [])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    let html = marked(md) 

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
                    <div className="mdeditor"
                      dangerouslySetInnerHTML={{__html:html}}
                    >
                    </div>
                </div>
                <Comment />
            </div>

        </AboutPage>
    )
}

export default Abouts;