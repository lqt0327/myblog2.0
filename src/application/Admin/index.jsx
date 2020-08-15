import React, { useState, useEffect } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    EditOutlined
} from '@ant-design/icons';
import { Page } from './style';
import 'antd/dist/antd.css'
import AddArticle from './Add';
import List from './List';
import AUpdate from './Update';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function SiderDemo(props) {
    const [collapsed, setCollapsed] = useState(false);
    const [addArticle, setAddArticle] = useState(false);
    const [alist, setAList] = useState(true);
    const [aupdate,setAUpdate] = useState(false);

    const [aid,setAid] = useState();

    const onCollapse = collapsed => {
        console.log(collapsed);
        setCollapsed(collapsed)
    };
    useEffect(() => {
    }, [aupdate,alist,addArticle,collapsed, aid])

    return (
        <Page>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <div className="logo"><h1>后台管理</h1></div>
                    <Menu theme="dark" defaultSelectedKeys={['3']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            Option 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>
                            Option 2
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<EditOutlined />} title="文章">
                            <Menu.Item key="3" onClick={()=>{setAList(true);setAddArticle(false);setAUpdate(false)}}>所有文章</Menu.Item>
                            <Menu.Item key="4" onClick={()=>{setAddArticle(true);setAList(false);setAUpdate(false)}}>写文章</Menu.Item>
                            <Menu.Item key="5">分类目录</Menu.Item>
                            <Menu.Item key="6">标签</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<TeamOutlined />} title="Team">
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />} />
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>User</Breadcrumb.Item>
                            <Breadcrumb.Item>{addArticle? "写文章" : alist ? "所有文章" : aupdate ? "更新文章" : ""}</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className={addArticle ? "site-layout-background" : "hide"}  style={{ padding: 24, minHeight: '70vh' }}>
                            <AddArticle />
                        </div>
                        <div className={alist ? "site-layout-background" : "hide"}  style={{ padding: 24, minHeight: '70vh' }}>
                            <List props={props} aupdate={[setAUpdate,setAddArticle,setAList]} setAid={setAid} aid={aid} />
                        </div>
                        <div className={aupdate ? "site-layout-background" : "hide"}  style={{ padding: 24, minHeight: '70vh' }}>
                            <AUpdate props={props} aid={aid} />
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </Page>
    );
}

export default SiderDemo;