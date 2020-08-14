import React, { useState } from 'react';
import { renderRoutes } from 'react-router-config';
import { Page, RightColumn } from './HomeLayout.style';
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { NavLink, Link } from 'react-router-dom'

function Home(props) {

    const [show, setShow] = useState(true);

    const { route } = props;

    return (
        <Page>
            <SwitchTransition>
                <CSSTransition key={show} appear classNames="rights" timeout={200}>
                    <RightColumn>
                        <div className="vertical-text site-title" onClick={() => { setShow(!show);props.history.push('/') }}>
                            <h3 className="site-title-small">
                                <a href="/" className="a-title">几万次，几亿次，不断往复</a>
                            </h3>
                            <h1 className="site-title-large">
                                <a href="/" className="a-title">海与潮汐</a>
                            </h1>
                        </div>
                        <br className="visible-lg visible-md visible-sm" />
                        <div className="site-title-links">
                            <ul onClick={(e)=>{
                                if(e.target.nodeName==="A") {
                                    setShow(!show)
                                }
                            }}>
                                <li>
                                    <NavLink to="/home" activeClassName="current">首页</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/archives" activeClassName="current">归档</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/categories" activeClassName="current">分类</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/tags" activeClassName="current">标签</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about/index.html" activeClassName="current">关于</NavLink>
                                </li>
                                <li>
                                    <Link to="/"><i className="iconfont">&#xe882;</i></Link>
                                    <span> </span>
                                    <Link to="/"><i className="iconfont">&#xe883;</i></Link>
                                    <span> </span>
                                    <Link to="/"><i className="iconfont">&#xe885;</i></Link>
                                </li>
                            </ul>
                            <div className="site-nav-footer">
                                <br className="site-nav-footer-br" />
                                <footer>
                                    <p>
                                        Powered by 绫罗 © 2020
                                    </p>
                                    {/* <p style={{fontSize:'10px'}}>
                                        互联网ICP备案：<a href="http://www.beian.miit.gov.cn">赣ICP备19000285号</a>
                                    </p> */}
                                </footer>
                            </div>
                        </div>
                    </RightColumn>
                </CSSTransition>
                </SwitchTransition>
                <SwitchTransition>
                <CSSTransition key={show} appear classNames="items" timeout={200}>
                    <div className="main-container">
                        {renderRoutes(route.routes, [show, setShow])}
                    </div>
                </CSSTransition>
            </SwitchTransition>

        </Page>
    )
}

export default React.memo(Home);