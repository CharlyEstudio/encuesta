import { Link } from 'react-router-dom';

// AntD
import {Layout, Menu} from "antd";
import { HomeOutlined } from '@ant-design/icons';

import './MenuSider.scss';

function MenuSider() {
    const {Sider} = Layout;
    return(
        <Sider className="admin-sider">
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
            >
                <Menu.Item key="1">
                    <Link to={"/admin"}>
                        <HomeOutlined />
                        <span className="nav-text">Home</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to={"/admin/menu-web"}>
                        <HomeOutlined />
                        <span className="nav-text">Menu Web</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    );
}

export default MenuSider;
