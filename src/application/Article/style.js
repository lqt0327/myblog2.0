import styled from 'styled-components';

export const ArticePage = styled.div`
    padding-bottom:60px;
    .post-container {
        margin: 0 0 20px 0;
        font-weight: normal;
        .post-title {
            font-size: 30px;
            margin-top: 0;
            font-weight: bold;
            margin: 3px 0;
        }
    }
    .pagination {
        display: inline-block;
        padding-left: 0;
        margin: 20px 0;
        border-radius: 4px;
        p a {
            border-bottom: none;
            padding-top: .2em;
        }
    }
`
