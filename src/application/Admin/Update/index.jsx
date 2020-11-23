import React, { useRef, useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { UpdateArticleRequest, getArticleRequest } from '../../../api/request';

export const Page = styled.div`
    width:100%;
`
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable */
const AUpdate = (prop) => {

    const { match: {params:{id}}} = prop

    const title = useRef();
    const content = useRef();

    const onFinish = values => {
        UpdateArticleRequest(id,values.title,values.content).then(res=>console.log(res.msg));
        // AddArticleRequest(values.title,values.content);
        values.title = "";
        values.content = "";
        title.current.input.value = "";
        content.current.resizableTextArea.textArea.value = "";
    };

    const [articleData, setArticleData] = useState({});

    const articleMountedRef = useRef(false);

    const safeSetArticleData = res => articleMountedRef.current && setArticleData(res)

    const getArticleData = useCallback((id) => {
        getArticleRequest(id)
            .then(data => {
                if (data.code === 200) {
                    safeSetArticleData(data);
                }
            })
    }, [])

    useEffect(() => {
        articleMountedRef.current = true;
        return () => {
            articleMountedRef.current = false
        }
    })

    useEffect(() => {
        getArticleData(id);
    }, [getArticleData,id])

    return (
        <Page>
            {
                articleData.data ?
                    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                        <Form.Item
                            name='title'
                            label="标题"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            initialValue={articleData.data.title}
                        >
                            <Input ref={title} />
                        </Form.Item>
                        <Form.Item
                            name='content'
                            label="文章内容"
                            rules={[
                                {
                                    required: true,
                                },
                            ]}
                            initialValue={articleData.data.content}
                        >
                            <Input.TextArea autoSize ref={content} />
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    : ""
            }

        </Page>
    );
}

export default React.memo(AUpdate);