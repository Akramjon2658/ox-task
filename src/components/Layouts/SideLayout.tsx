import {Layout, Menu} from "antd";
import {useState} from "react";
import {NavLink, useLocation} from "react-router-dom";

const {Sider} = Layout;

const SideLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation()

    return <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <div className="logo"/>
        <Menu theme="dark" mode="inline" selectedKeys={[location.pathname]}>
            <Menu.Item key="/products">
                <NavLink to={'/products'}>Products</NavLink>
            </Menu.Item>
            <Menu.Item key="/product-search">
                <NavLink to={'/product-search'}>Products search</NavLink>
            </Menu.Item>
        </Menu>
    </Sider>
};

export default SideLayout