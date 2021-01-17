import { useState } from 'react';

// AntD
import { Form, Input, Button, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './LoginForm.scss';

// API
import { signInUp } from '../../../../api/user-api';

function Loginform() {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const login = async () => {
        const resp = await signInUp(inputs);
        if (resp.status) {
            notification.success({
                message: 'Usuario Conectado'
            });
            // Redirigir al panel de administración
            window.location.href('/admin');
        } else {
            notification.error({
                message: resp.message
            });
        }
    };

    return(
        <Form className="login-form" onFinish={login} onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }} />}
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }}/>}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="login-form__input"
                />
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="login-form__button">
                    Iniciar Sesión
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Loginform;
