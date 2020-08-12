import React from 'react';
import { ArchiveContent } from './style';

function Archive() {
    return (
        <ArchiveContent>
            <div className="content">
                <div className="archive animated">
                    <ul className="list-with-title">
                        <p className="post-title">归档 10 篇</p>
                        <div className="archive">
                            {
                                new Array(3).fill(0).map((item, index) => {
                                    return (
                                        <div key={index}>
                                        <div className="listing-title">
                                            <h4 className="ar-year">2020</h4>
                                        </div>
                                        <div className="listing">
                                            {
                                                new Array(10).fill(0).map((item2, index2) => {
                                                    return (
                                                        <div className="listing-item" key={index2}>
                                                            <div className="listing-post">
                                                                <p className="post-title">
                                                                    <a href="/post/1?id=123">测试数据qwe</a>
                                                                </p>
                                                                <div className="post-time">
                                                                    <span className="ar-date">8-10</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </ArchiveContent>
    )
}

export default Archive;