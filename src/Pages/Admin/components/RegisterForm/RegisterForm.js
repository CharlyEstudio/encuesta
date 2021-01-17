import { useState } from 'react';

// AntD
import {Form, Input, Button, Checkbox, notification} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './RegisterForm.scss';

function RegisterForm() {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        privacyPolicy: false
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.name === 'privacyPolicy' ? e.target.checked : e.target.value
        });
    };

    const register = () => {
        console.log(inputs);
    };

    return(
        <Form className="register-form" onFinish={register} onValuesChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }}/>}
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    className="register-form__input"
                    value={inputs.email}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }}/>}
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    className="register-form__input"
                    value={inputs.password}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    prefix={<LockOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }}/>}
                    type="password"
                    name="repeatPassword"
                    placeholder="Repetir Contraseña"
                    className="register-form__input"
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                    name="privacyPolicy"
                    checked={inputs.privacyPolicy}
                >
                    He leído y acepto la polìtica de privacidad.
                </Checkbox>
            </Form.Item>
            <Form.Item>
                <Button htmlType="submit" className="register-form__button">
                    Crear Cuenta
                </Button>
            </Form.Item>
        </Form>
    );
}

export default RegisterForm;
