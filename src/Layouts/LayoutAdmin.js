import './LayoutAdmin.scss';

// AntD
import { Layout } from 'antd';

// Components
import { LoadRoutes } from '../shared/components';

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

export default LayoutAdmin;
