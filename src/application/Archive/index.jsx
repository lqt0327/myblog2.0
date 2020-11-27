import React, { useEffect } from 'react';
import { ArchiveContent } from './style';
import { getArchivesRequest } from '../../api/request';
import { useState } from 'react';
import { useRef } from 'react';
import { useCallback } from 'react';
import Loading from '../../baseUI/Loading';
import { Link } from 'react-router-dom'

function Archive(props) {

    const show= props[0];
    const setShow = props[1];

    const [archiveData,setArchiveData] = useState([]);
    
    const archiveMountedRef = useRef(false);

    const safeSetArchiveData = res => archiveMountedRef.current && setArchiveData(res);

    const getArchiveData = useCallback(()=>{
        getArchivesRequest()
        .then(res=>{
            if(res.length > 0) {
                    // 筛选出年份并拼接到新加的 year 属性上
                res.year = [];
                for(let i = 0; i < res.length; i++) {
                    res[i].time = new Date(res[i].time*1000).toLocaleDateString().split('/');
                    if(i > 0 && res[i].time[0] !== res[i-1].time[0]) {
                        res.year.push(res[i].time[0]);
                    } 
                }
                res.year.unshift(res[0].time[0])
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
        getArchiveData();
    },[getArchiveData])


    return (
        <ArchiveContent>
            <div className="content">
                <div className="archive animated">
                    <ul className="list-with-title">
                        <p className="post-title">归档 {archiveData ? archiveData.length : 0} 篇</p>
                        <div className="archive">
                            {
                                archiveData.length >0 ? archiveData.year.map((item, index) => {
                                    return (
                                        <div key={index}>
                                        <div className="listing-title">
                                            <h4 className="ar-year">{item}</h4>
                                        </div>
                                        <div className="listing">
                                            {
                                                // 将各个年份的数据分类筛选
                                                archiveData.filter(ans=>ans.time[0] === item).map((item2, index2) => {
                                                    return (
                                                        <div className="listing-item" key={index2}>
                                                            <div className="listing-post">
                                                                <p className="post-title">
                                                                    <Link to={"/post/"+item2.id}  onClick={()=>{setShow(!show)}}>{item2.title}</Link>
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
                                }): <Loading />
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </ArchiveContent>
    )
}

export default Archive;