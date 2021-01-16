import './MenuTop.scss';

// AntD
import { Button } from 'antd';
import { MenuFoldOutlined, PoweroffOutlined } from '@ant-design/icons';

// Logo
import Logo from '../../../../assets/logo/logo.jpg';

function MenuTop() {
    return(
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                    className="menu-top__left__logo"
                    src={Logo}
                    alt="Encuesta"
                />
                <p className="menu-top__left__text">Encuestas</p>
                <Button type="link" onClick={() => console.log('Click')}>
                    <MenuFoldOutlined style={{ fontSize: '20px' }} />
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={() => console.log('Off')}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}

export default MenuTop;
