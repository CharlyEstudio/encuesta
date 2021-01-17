import { useState } from 'react';

// AntD
import {Form, Input, Button, Checkbox, notification} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

// Utils
import { emailValidation, minLengthValidation, removeClassError } from '../../../../utils/formValidation';

import './RegisterForm.scss';

function RegisterForm() {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        repeatPassword: '',
        privacyPolicy: false
    });

    const [formValid, setFormValid] = useState({
        email: false,
        password: false,
        repeatPassword: false,
        privacyPolicy: false
    });

    const changeForm = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.name === 'privacyPolicy' ? e.target.checked : e.target.value
        });

        if (e.target.name !== 'privacyPolicy') {
            if (e.target.value.length === 0) {
                removeClassError(e.target);
            }
        }
    };

    const inputValidation = e => {
        const {type, name} = e.target;

        setFormValid({
            ...formValid,
            [name]: type === 'email'
                ? emailValidation(e.target)
                : type === 'password'
                    ? minLengthValidation(e.target, 6)
                    : e.target.checked
        });
    };

    const register = () => {
        const emailVal = formValid.email;
        const passwordVal = formValid.password;
        const repeatPasswordVal = formValid.repeatPassword;
        const privacyPolicyVal = formValid.privacyPolicy;

        if (!emailVal || !passwordVal || !repeatPasswordVal) {
            notification.warn({
                message: 'Todos los campos son obligatorios'
            });
        } else {
            if (passwordVal !== repeatPasswordVal) {
                notification.warn({
                    message: 'Las contraseñas tienen que ser iguales'
                });
            } else {
                if (!privacyPolicyVal) {
                    notification.error({
                        message: 'No ha aceptado las políticas de privacidad.'
                    });
                } else {
                    // TO DO: Conectar con la API y registrar usuario
                    console.log(inputs);
                    notification.success({
                        message: 'Usuario creado correctamente'
                    });
                    resetForm();
                }
            }
        }
    };

    const resetForm = () => {
        const inputs = document.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            removeClassError(inputs[i]);
        }

        setInputs({
            email: '',
            password: '',
            repeatPassword: '',
            privacyPolicy: false
        });

        setFormValid({
            email: false,
            password: false,
            repeatPassword: false,
            privacyPolicy: false
        });
    };

    return(
        <Form className="register-form" onFinish={register} onChange={changeForm}>
            <Form.Item>
                <Input
                    prefix={<UserOutlined style={{ color: "rgba(0, 0, 0, 0.25)" }}/>}
                    type="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    className="register-form__input"
                    onChange={inputValidation}
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
                    onChange={inputValidation}
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
                    onChange={inputValidation}
                    value={inputs.repeatPassword}
                />
            </Form.Item>
            <Form.Item>
                <Checkbox
                    name="privacyPolicy"
                    onChange={inputValidation}
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
