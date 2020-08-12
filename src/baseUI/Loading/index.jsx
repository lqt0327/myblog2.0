import React from 'react';
import styled from 'styled-components';

export const Load = styled.div`
    width:100%;
    height:500px;
    display:flex;
    align-items:center;
    justify-content:center;
`

function Loading() {
    return (
        <Load>
            正在加载中……
        </Load>
    )
}

export default React.memo(Loading);