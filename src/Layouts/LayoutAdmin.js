import { Route } from 'react-router-dom';

import './LayoutAdmin.scss';

// AntD
import { Layout } from 'antd';

function LayoutAdmin({routes}) {
    const { Header, Content, Footer } = Layout;
    return(
        <Layout>
            <h2>Menu Sider Admin</h2>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <LoadRoutes routes={routes} />
                </Content>
                <Footer>
                    Encuestas Hola Mundo
                </Footer>
            </Layout>
        </Layout>
    );
}

function LoadRoutes({routes}) {
    return routes.map((route, index) => (
        <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
        />
    ));
}

export default LayoutAdmin;
