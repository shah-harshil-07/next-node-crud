import { useState } from 'react';
import styles from '../styles/Login.module.css';
import Head from 'next/head';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);

    const changePasswordType = () => {
        setShowPassword(!showPassword);
    }

    const onHandleChange = (key, data) => {
        setLoginData({ ...loginData, [key]: data });
        setErrors({ ...errors, [key]: "" });
    }

    const onHandleValidation = () => {
        let _errors = errors;
        let formIsValid = true;

        for (const key in loginData) {
            if (loginData[key].length === 0) {
                _errors[key] = `${key} feild is required!`;
                _errors[key] = _errors[key].toUpperCase();
                formIsValid = false;
            }
        }

        setErrors({ ..._errors });
        return formIsValid;
    }

    const onSubmit = e => {
        e.preventDefault();
        onHandleValidation();
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="stylesheet" href="<https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css>"></link>
                <title>Login Page</title>
            </Head>

            <div translate="no" id={styles['main-body']}>
                <div className={styles.login}>
                    <div className={styles.login_title}>
                        <span>Login to your account</span>
                    </div>

                    <div className={styles.login_fields}>
                        <div className={styles.login_fields__user}>
                            <div className={styles.icon}>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/user_icon_copy.png" />
                            </div>

                            <input
                                placeholder="Email"
                                type="text"
                                value={loginData.email}
                                onChange={e => onHandleChange('email', e.target.value)}
                            />
                        </div>

                        <div className={styles.login_fields__password}>
                            <div className={styles.icon}>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/217233/lock_icon_copy.png" />
                            </div>

                            <input
                                placeholder="Password"
                                type={showPassword ? 'text' : 'password'}
                                value={loginData.password}
                                onChange={e => onHandleChange('password', e.target.value)}
                            />

                            <i
                                class={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}
                                id={styles['eye-icon']}
                                onClick={() => changePasswordType()}
                            ></i>
                        </div>

                        <div className={styles.login_fields__submit}>
                            <input type="submit" value="Log In" onClick={e => onSubmit()} />

                            <div className={styles.forgot}>
                                <a href="#">Forgotten password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;