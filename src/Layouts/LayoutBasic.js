// AntD
import { Layout } from "antd";

// Components
import { LoadRoutes } from '../shared/components';

function LayoutBasic({routes}) {
    const { Content, Footer } = Layout;
    return(
        <Layout>
            <h2>Menu Sider Basic</h2>
            <Layout>
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

export default LayoutBasic;
