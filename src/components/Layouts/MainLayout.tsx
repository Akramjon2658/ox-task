import React from "react";
import {Layout} from 'antd';
import HeaderLayout from "./HeaderLayout";

const {Content} = Layout
const MainLayout: React.FC = (props) => {
    return <Layout className="site-layout">
        <HeaderLayout />
        <Content style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
        }}>
            <div className="site-layout-background" style={{padding: 24, minHeight: 300}}>
                {props.children}
            </div>
        </Content>
    </Layout>
}

export default MainLayout