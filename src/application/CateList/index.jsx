import React, { useEffect } from 'react';
import { ArchiveContent } from '../Archive/style';
import { getCateListRequest } from '../../api/request';
import { useState } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom'

function CateList(props) {
    const show= props[0];
    const setShow = props[1];

    const [archiveData,setArchiveData] = useState([]);
    
    const archiveMountedRef = useRef(false);

    const safeSetArchiveData = res => archiveMountedRef.current && setArchiveData(res);

    const getArchiveData = useCallback((cid)=>{
        getCateListRequest(cid)
        .then(res=>{
            if(res.length > 0) {
                    // 筛选出年份并拼接到新加的 year 属性上
                res.year = []
                for(let i = 0; i < res.length; i++) {
                    res[i].a_time = new Date(res[i].a_time*1000).toLocaleDateString().split('/');
                    if(i > 0 && res[i].a_time[0] !== res[i-1].a_time[0]) {
                        res.year.push(res[i].a_time[0]);
                    } 
                }
                res.year.unshift(res[0].a_time[0])
                res.c_catename = res[0].c_catename
                safeSetArchiveData(res)
            }
        })
    },[])

    useEffect(()=>{
        archiveMountedRef.current = true;
        return (()=>{
            archiveMountedRef.current=false
        })
    })

    useEffect(()=>{
        const cid = props.match.params.id;
        getArchiveData(cid);
    },[getArchiveData,props])

    return (
        <ArchiveContent>
            <div className="content">
                <div className="archive animated">
                    <ul className="list-with-title">
                        <p className="post-title">分类 {archiveData.length > 0 ? archiveData.c_catename : '无'}</p>
                        <div className="archive">
                            {
                                archiveData.length > 0 ? archiveData.year.map((item, index) => {
                                    return (
                                        <div key={index}>
                                        <div className="listing-title">
                                            <h4 className="ar-year">{item}</h4>
                                        </div>
                                        <div className="listing">
                                            {
                                                // 将各个年份的数据分类筛选
                                                archiveData.filter(ans=>ans.a_time[0] === item).map((item2, index2) => {
                                                    return (
                                                        <div className="listing-item" key={index2}>
                                                            <div className="listing-post">
                                                                <p className="post-title">
                                                                    <Link to={"/post/"+item2.a_id} onClick={()=>{setShow(!show)}}>{item2.a_title}</Link>
                                                                </p>
                                                                <div className="post-time">
                                                                    <span className="ar-date">{item2.a_time[1]}-{item2.a_time[2]}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        </div>
                                    )
                                }): ""
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </ArchiveContent>
    )
}

export default CateList;