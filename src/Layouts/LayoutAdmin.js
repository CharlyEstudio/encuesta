import './LayoutAdmin.scss';

// AntD
import { Layout } from 'antd';

// Components Globals
import { LoadRoutes } from '../shared/components';

// Components Admin
import { MenuTop } from '../Pages/Admin/components';

function LayoutAdmin({routes}) {
    const { Header, Content, Footer } = Layout;
    return(
        <Layout>
            {/* TO DO: Menu Sider */}
            <Layout className="layout-admin">
                <Header className="layout-admin__header">
                    <MenuTop />
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
