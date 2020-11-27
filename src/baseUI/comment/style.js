import styled from 'styled-components';

export const Comment = styled.div`
    font-size: 16px;
    text-align: left;
    * {
        box-sizing: border-box;
        line-height: 2;
        color: ${styled["font-color-v2"]};
        transition: all .3s ease;
    }
    .vwrap {
        border: 1px solid #f0f0f0;
        border-radius: 4px;
        margin-bottom: 10px;
        overflow: hidden;
        position: relative;
        padding: 10px;
        background: #fff9;
        .vheader .vinput {
            width: 33.33%;
            border-bottom: 1px dashed #dedede;
        }
        input {
            background: transparent;
        }
        .vedit {
            position: relative;
            padding-top: 10px;
            .vctrl {
                text-align: right;
                font-size: 12px;
                span {
                    padding: 10px;
                    display: inline-block;
                    vertical-align: middle;
                    cursor: pointer;
                }
            }
        }
        .vcontrol {
            font-size: 0;
            padding-top: 15px;
            display:flex;
            justify-content:space-between;
            align-items:center;
            .col {
                display: inline-block;
                font-size: 16px;
                vertical-align: middle;
                color: ${styled["font-color-v3"]};
            }
        }
        hr {
            transform: scaleY(0.3);
        }
    }
    .vbtn {
        transition-duration: .4s;
        text-align: center;
        color: #313131;
        border: 1px solid #ededed;
        border-radius: .3em;
        display: inline-block;
        background: #ededed;
        margin-bottom: 0;
        font-weight: 400;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        white-space: nowrap;
        padding: .5em 1.25em;
        font-size: .875em;
        line-height: 1.42857143;
        user-select: none;
        outline: none;
    }
    .vbtn:hover{
        color:#02C7FD;
        background-color:transparent;
        border:1px solid #02C7FD;
    }
    .vinput {
        border: none;
        resize: none;
        outline: none;
        padding: 10px 5px;
        max-width: 100%;
        font-size: .775em;
    }
    .veditor {
        width: 100%;
        min-height: 8.75em;
        font-size: .875em;
        background: transparent;
        resize: vertical;
        transition: all .25s ease;
    }
    .vnick:focus,.vmail:focus,.vlink:focus {
        border-bottom: 1px dashed #E7A82A!important;
    }
    .vinfo {
        font-size: 0;
        padding: 5px;
        .col {
            font-size: 16px;
            display: inline-block;
            width: 50%;
            vertical-align: middle;
        }
        .vcount .vnum {
            font-weight: 600;
            font-size: 1.25em;
        }
    }
    .vlist {
        width: 100%;
        .vcard {
            padding-top: 1.5em;
            position: relative;
            display: block;
            .vimg {
                width: 3.125em;
                height: 3.125em;
                float: left;
                border-radius: 50%;
                margin-right: .7525em;
                border: 1px solid #f5f5f5;
                padding: .125em;
            }
            .vh {
                overflow: hidden;
                padding-bottom: .5em;
                border-bottom: 1px dashed #f5f5f5;
                .vmeta {
                    line-height: 1;
                    position: relative;
                    .vat {
                        font-size: .8125em;
                        color: #ef2f11;
                        cursor: pointer;
                        float: right;
                    }
                }
                .vtime {
                    color: #b3b3b3;
                    font-size: .75em;
                    margin-right: .875em;
                }
            }
            .vhead {
                line-height: 1.5;
                margin-top: 0;
                .vnick {
                    position: relative;
                    font-size: .875em;
                    font-weight: 500;
                    margin-right: .875em;
                    cursor: pointer;
                    color: #1abc9c;
                    text-decoration: none;
                    display: inline-block;
                }
                .vnick:hover {
                    color:#EE301F;
                }
            }
            .vcontent {
                word-wrap: break-word;
                word-break: break-all;
                text-align: justify;
                color: #4a4a4a;
                font-size: .875em;
                line-height: 2;
                position: relative;
                margin-bottom: .75em;
                padding-top: .625em;
                p {
                    font-size: 14px;
                    margin-top: 0;
                }
            }
        }
    }
    .vempty {
        padding: 1.25em;
        text-align: center;
        color: #999;
    }
    .txt-center {
        text-align: center;
    }
    .vpage .vmore {
        margin: 1em 0;
    }
`
