import { useState } from 'react';
import styles from '../styles/Login.module.css';
import Head from 'next/head';

const login = () => {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState({
        username: "",
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
            </Head>
            <div className={styles['body']}>
                <div className={styles['login-wrap']}>
                    <div className={styles['login-html']}>
                        <input id="tab-1" type="radio" name="tab" className={styles['sign-in']} defaultChecked />
                        <label htmlFor="tab-1" className={styles['tab']}><center>Sign In</center></label>

                        <div className={styles['login-form']}>
                            <div className={styles['group']}>
                                <span className={styles['p-float-label']}>
                                    <input
                                        className={styles['input']}
                                        type="text"
                                        value={loginData.username}
                                        onChange={e => onHandleChange('username', e.target.value)}
                                    />
                                    <label
                                        htmlFor="user"
                                        style={{ paddingLeft: '20px' }}
                                        className={styles['label']}
                                    >
                                        Username
                                    </label>
                                </span>
                                <span className='text-danger'>{errors['username']}</span>
                            </div>

                            <div className={styles['group']} style={{ marginTop: '40px' }}>
                                <span className={styles['p-float-label']} style={{position: 'relative'}}>
                                    <input
                                        className={styles['input']}
                                        type={`${showPassword ? 'text' : 'password'}`}
                                        value={loginData.password}
                                        onChange={e => onHandleChange('password', e.target.value)}
                                    />

                                    <i
                                        class={`bi ${showPassword ? 'bi-eye-fill' : 'bi-eye-slash-fill'}`}
                                        style={{position: 'absolute', top: '12px', right: '15px', fontSize: '25px'}}
                                        onClick={() => changePasswordType()}
                                    ></i>

                                    <label
                                        htmlFor="pass"
                                        style={{ paddingLeft: '20px' }}
                                        className={styles['label']}
                                    >
                                        Password
                                    </label>
                                </span>
                                <span className='text-danger'>{errors['password']}</span>
                            </div>

                            <div className={styles['group']}>
                                <input type="submit" onClick={e => onSubmit(e)} className={styles['button']} value="Sign In" />
                            </div>

                            <div className="hr"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default login;