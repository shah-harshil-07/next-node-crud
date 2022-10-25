import { useState } from 'react';
import styles from '../styles/Login.module.css';
import LoginService from '../pages/api/LoginService';
import Head from 'next/head';
import { useToast } from '../helpers/ToasterService';
import { useRouter } from 'next/router';

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });
    const [showPassword, setShowPassword] = useState(false);
    const { showSuccess, showError } = useToast();
    const router = useRouter();

    const changePasswordType = () => {
        setShowPassword(!showPassword);
    }

    const onHandleChange = (key, data) => {
        setLoginData({ ...loginData, [key]: data });
    }

    const onHandleValidation = () => {
        let formIsValid = true;

        for (const key in loginData) {
            if (loginData[key].length === 0) {
                formIsValid = false;
            }
        }

        return formIsValid;
    }

    const onSubmit = async e => {
        e.preventDefault();
        try {
            const response = await LoginService.login(loginData);
            if (response.meta.status) {
                showSuccess(response.meta.message);
                router.push('/users');
            } else {
                showError(response.meta.message);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Head><title>Login Page</title></Head>

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
                                className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}
                                id={styles['eye-icon']}
                                onClick={() => changePasswordType()}
                            ></i>
                        </div>

                        <div className={styles.login_fields__submit}>
                            <input
                                type="submit"
                                value="Log In"
                                className={!onHandleValidation() ? 'pe-none opacity-50' : ''}
                                onClick={e => onSubmit(e)}
                            />

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