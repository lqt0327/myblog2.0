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

    const [archiveData,setArchiveData] = useState({});
    
    const archiveMountedRef = useRef(false);

    const safeSetArchiveData = res => archiveMountedRef.current && setArchiveData(res);

    const getArchiveData = useCallback((cid)=>{
        getCateListRequest(cid)
        .then(res=>{
            if(res.code === 200 && res.data.length !== 0) {
                // 筛选出年份并拼接到新加的 year 属性上
                res.year = [];
                for(let i = 0; i < res.data.length; i++) {
                    res.data[i].time = new Date(res.data[i].time*1000).toLocaleDateString().split('/');
                    if(i > 0 && res.data[i].time[0] !== res.data[i-1].time[0]) {
                        res.year.push(res.data[i].time[0]);
                    } 
                }
                res.year.unshift(res.data[0].time[0])
                res.catename = res.data[0].catename
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
                        <p className="post-title">分类 {archiveData.data ? archiveData.catename : '无'}</p>
                        <div className="archive">
                            {
                                archiveData.data ? archiveData.year.map((item, index) => {
                                    return (
                                        <div key={index}>
                                        <div className="listing-title">
                                            <h4 className="ar-year">{item}</h4>
                                        </div>
                                        <div className="listing">
                                            {
                                                // 将各个年份的数据分类筛选
                                                archiveData.data.filter(ans=>ans.time[0] === item).map((item2, index2) => {
                                                    return (
                                                        <div className="listing-item" key={index2}>
                                                            <div className="listing-post">
                                                                <p className="post-title">
                                                                    <Link to={"/post/"+item2.id} onClick={()=>{setShow(!show)}}>{item2.title}</Link>
                                                                </p>
                                                                <div className="post-time">
                                                                    <span className="ar-date">{item2.time[1]}-{item2.time[2]}</span>
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