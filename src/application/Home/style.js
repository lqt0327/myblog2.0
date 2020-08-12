import styled from 'styled-components';
import style from '../../assets/global-style';


export const MainContent = styled.div`
    .post-container {
        margin: 0 0 20px 0;
        font-weight: normal;
        p {
            margin: 10px 0 0;
            font-size: ${style["font-size-s"]};
            line-height: 1.7em;
            letter-spacing: .6px;
        }
        & > .post-meta {
            font-size: ${style["font-size-ss"]};
            .meta-item {
                margin: 0 10px 0 0;
            }
            .date {
                margin-bottom: 0px;
            }
        }
        & > .post-abstract {
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            width:100%;
            * {
                display:inline;
                /* white-space:nowrap; */
                font-size:${style["font-size-ss"]};
                font-weight:normal;
                img {
                    display:none;
                }
            }
        }
    }
`

export const Pagination = styled.div`
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px;
    p {
        margin-top: 10px;
    }
`