import React from 'react';
import styled from 'styled-components';

export const Page = styled.div`
    ul {
        margin-left: 40px;
    }
`

function Tags() {
    return (
        <Page>
            <div className="content">
                <div className="archive">
                    <ul className="list-with-title">
                        <p className="post-title">标签</p>
                        <div className="archive"></div>
                        <ul className="listing">
                            {
                                new Array(20).fill(0).map((item, index) => {
                                    return (
                                        <div className="list-item" key={index}>
                                            <div className="listing-post">
                                                <p className="post-title">
                                                    <a href="/" title="lab">llscw</a>
                                                </p>
                                                <span className="date meta-item">10 篇</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </ul>
                    </ul>
                </div>
            </div>
        </Page>

    )
}

export default React.memo(Tags);