import styled from 'styled-components';
import style from '../assets/global-style';

export const Page = styled.div`
    width:70vw;
    position: absolute;
    height:auto;
    margin: 0 15vw;
    .main-container {
        padding-bottom: 60px;
        position:absolute;
        width:50vw;
        top:20px;
        opacity:0;
        transition:all 0.5s ease-out;
        p {
            margin: 10px 0 0;
            font-size: 17px;
            line-height: 1.7em;
            letter-spacing: .6px;
            a {
                border-bottom: solid ${style["theme-color"]} 1px;
                padding-top: .2em;
            }
            a:hover {
                color:#fff;
                background-color:${style["theme-color"]};
            }
        }
        .post-meta {
            font-size: 14px;
        }
        .meta-item {
            margin: 0 10px 0 0;
        }
        .post-abstract {
            font-size: 18px;
        }
        &.items-enter{
            opacity:0;
        }
        &.items-enter-done {
            transform:translate3d(0,20px,0);
            opacity:1;
        }
        &.items-exit,&.items-exit-active{
            display:none;
        }
    }
    .post-title {
        font-size: ${style["font-size-mm"]};
        font-weight: bold;
        margin: 3px 0;
    }
    
`

export const RightColumn = styled.nav`
    position: fixed;
    right:-20px;
    opacity: 0;
    top: 0;
    padding:40px 20px;
    width:30vw;
    height:100vh;
    transition: all .5s ease-out;
    &.rights-enter-done{
        transform:translate3d(-20px,0,0);
        opacity: 1;
    }
    .vertical-text {
        writing-mode: vertical-rl;
    }
    .site-title {
        font-weight: bolder;
        font-style: normal;
        width: auto;
        height: auto;
        max-height: 400px;
        margin: 0 0 0 -2px;
        text-align: left;
        font-size: .5em;
        padding: 0 0 50px 0;
        border-left: solid ${styled["theme-color-v2"]} 2px;
        * {
            transition:all 0.5s ease-out;
            font-family: "Noto Serif SC","HiraMinProN-W6","Source Han Serif CN","Source Han Serif SC","Source Han Serif TC",serif;
        }
        .a-title {
            background-color: transparent;
            border-bottom: solid transparent 1px;
        }
    }
    .site-title:hover {
        background-color: #606975;
        * {
            transform:translateY(15px);
            color:#fff;
        }
    }
    .site-title :first-child {
        margin-right: 10px;
    }
    .site-title-links {
        font-weight: bold;
        font-style: normal;
        margin: 0;
        padding: 60px 0;
        text-align: left;
        position: fixed;
        bottom: 20px;
        ul li {
            display: block;
            margin: 5px 0;
            font-size: ${style["font-size-s"]};
        }
        .current {
            padding-bottom:3px;
            border-bottom: solid ${styled["theme-color-v2"]} 2px !important;
        }
        footer {
            margin-top: 10px;
            padding-top: 0;
            font-size: 12px;
            font-weight: bold;
            P {
                margin-top:5px;
            }
        }
    }
    @media only screen and (max-height: 860px) {
        .site-title-small {
            font-size: ${style["font-size-m"]};
        }
    }
    @media only screen and (max-height: 860px){
        .site-title-large {
            font-size: ${style["font-size-ll"]};
        }
    }
    @media only screen and (max-height: 860px){
        .site-title-links ul li {
            font-size: ${style["font-size-ss"]};
            line-height: 1.4;
        }
    }

`