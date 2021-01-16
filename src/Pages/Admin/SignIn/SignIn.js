import { Layout, Tabs } from 'antd';

// Logo
import Logo from '../../../assets/logo/logo.jpg';

import './SignIn.scss';

function SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;
    return(
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <h1 className="sign-in__content__logo">
                    <img
                        src={Logo}
                        alt="Encuesta HolaMundo"
                    />
                    <p className="sign-in__content__text">Encuestas</p>
                </h1>
                <div className="sign-in__content__tabs">
                    <Tabs type="card">
                        <TabPane tab={<span>Entrar</span>} key="1">
                            Componente LoginForm
                        </TabPane>
                        <TabPane tab={<span>Nuevo Usuario</span>} key="2">
                            Componente RegisterForm
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    );
}

export default SignIn;
