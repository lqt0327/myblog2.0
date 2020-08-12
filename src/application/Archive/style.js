import styled from 'styled-components';

export const ArchiveContent = styled.div`
    ol, ul {
        margin-top: 0;
        margin-bottom: 10px;
    }
    .archive :first-child {
        padding-left: 0;
    }
    .archive .post-title {
        font-size: 17px;
    }
    .ar-year {
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .listing {
        margin-bottom: 0;
        padding-inline-start: 40px;
    }
    .ar-date {
        font-size: 16px;
        margin-bottom: 5px;
    }
    p a{
        border:none!important;
    }
`