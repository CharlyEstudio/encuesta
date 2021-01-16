import './MenuTop.scss';

// AntD
import { Button } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined, PoweroffOutlined } from '@ant-design/icons';

// Logo
import Logo from '../../../../assets/logo/logo.jpg';

function MenuTop({menuCollapsed, setMenuCollapsed}) {
    return(
        <div className="menu-top">
            <div className="menu-top__left">
                <img
                    className="menu-top__left__logo"
                    src={Logo}
                    alt="Encuesta"
                />
                {
                    !menuCollapsed
                    ? <p className="menu-top__left__text">Encuestas</p>
                    : null
                }
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {
                        menuCollapsed
                        ? <RightCircleOutlined style={{ fontSize: '20px' }} />
                        : <LeftCircleOutlined style={{ fontSize: '20px' }} />
                    }
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
