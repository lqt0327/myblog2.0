import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getCateRequest } from '../../api/request';
import { useState } from 'react';
import { useRef } from 'react';
import Loading from '../../baseUI/Loading';

export const Page = styled.div`
    ul {
        margin-left: 40px;
    }
`

function Categories(props) {

    const show= props[0];
    const setShow = props[1];

    const [cateData, setCateData] = useState([]);

    const cateMountedRef = useRef(false);

    const safeSetCateData = res => cateMountedRef.current && setCateData(res);

    const getCateData = useCallback(()=>{
        getCateRequest()
        .then(res=>{
            safeSetCateData(res);
        })
    },[])

    useEffect(()=>{
        cateMountedRef.current = true;
        return (()=>{
            cateMountedRef.current = false
        })
    })

    useEffect(() => {
        getCateData()
    }, [getCateData])

    return (
        <Page>
            <div className="content">
                <div className="archive">
                    <ul className="list-with-title">
                        <p className="post-title">分类</p>
                        <div className="archive"></div>
                        <ul className="listing">
                            {
                                cateData ? cateData.map((item, index) => {
                                    return (
                                        <div className="list-item" key={index}>
                                            <div className="listing-post">
                                                <p className="post-title">
                                                    <Link to={"/catelist/"+item.id} title={item.catename} onClick={()=>{setShow(!show)}}>{item.catename}</Link>
                                                </p>
                                                {/* <span className="date meta-item">10 篇</span> */}
                                            </div>
                                        </div>
                                    )
                                }):<Loading />
                            }
                        </ul>
                    </ul>
                </div>
            </div>
        </Page>

    )
}

export default React.memo(Categories);