import {Layout} from "antd";
import SideLayout from "./SideLayout";
import MainLayout from "./MainLayout";
import React from "react";
import './layout.css';

const LayoutComponent: React.FC = (props) => {
    return <Layout style={{ minHeight: '100vh' }}>
        <SideLayout/>
        <MainLayout children={props.children}/>
    </Layout>
}

export default LayoutComponent