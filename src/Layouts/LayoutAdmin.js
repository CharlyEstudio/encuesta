import { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import './LayoutAdmin.scss';

// AntD
import { Layout } from 'antd';

// Components Globals
import { LoadRoutes } from '../shared/components';

// Components Admin
import { MenuTop, MenuSider } from '../Pages/Admin/components';
import { SignIn } from '../Pages/Admin';

function LayoutAdmin({routes}) {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;

    const user = null;

    if (!user) {
        return(
            <>
                <Route
                    path="/admin/login" component={SignIn}
                />
                <Redirect to="/admin/login" />
            </>
        );
    }

    return(
        <Layout
            className="layout-admin"
            style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
            <MenuSider menuCollapsed={menuCollapsed} />
            <Layout className="layout-admin">
                <Header className="layout-admin__header">
                    <MenuTop menuCollapsed={menuCollapsed} setMenuCollapsed={setMenuCollapsed} />
                </Header>
                <Content className="layout-admin__content">
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer className="layout-admin__footer">
                    Encuestas Hola Mundo
                </Footer>
            </Layout>
        </Layout>
    );
}

export default LayoutAdmin;
