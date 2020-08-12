import React from 'react';
import styled from 'styled-components';
import { Form, Input, Button } from 'antd';
import { AddArticleRequest } from '../../../api/request';

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
const AddArticle = () => {
    const onFinish = values => {
        // console.log(values);
        AddArticleRequest(values.title,values.content);
    };

    return (
        <Page>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name='title'
                    label="标题"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                  name='content'
                  label="文章内容"
                  rules={[
                    {
                        required: true,
                    },
                ]}
                >
                    <Input.TextArea autoSize />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </Page>
    );
};

export default AddArticle