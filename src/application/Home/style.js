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
            /* 火狐和ie不支持这个属性，所以需要通过line-height和height配合伪元素 */
            -webkit-line-clamp: 2;
            width:100%;
            line-height: 26px;
            position: relative;
            height: 46px;
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

        & > .post-abstract:after {
            content: '';
            text-align:right;
            position:absolute;
            bottom: 0;
            right: 0;
            width:10%;
            height: 26px;
            background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%)
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