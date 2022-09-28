// import '../styles/Login.module.css';
import styles from '../styles/Login.module.css';

const login = () => {
    return (
        <div className={styles['login-wrap']}>
            <div className={styles['login-html']}>

                <input id="tab-1" type="radio" name="tab" className={styles['sign-in']} defaultChecked />
                <label htmlFor="tab-1" className={styles['tab']}><center>Sign In</center></label>

                <input id="tab-2" type="radio" name="tab" className={styles['sign-up']} />
                <label htmlFor="tab-2" className={styles['tab']}>Sign Up</label>

                <div className={styles['login-form']}>
                    <div className={styles['sign-in-htm']}>
                        <div className={styles['group']}>
                            <span className={styles['p-float-label']}>
                                {/* <InputText
                                    id='login-user'
                                    value={username}
                                    className="input"
                                    onChange={e => setUsername(e.target.value)}
                                /> */}
                                <input className={styles['input']} type="text" />
                                <label htmlFor="user" style={{ paddingLeft: '20px' }} className={styles['label']}>Username</label>
                            </span>
                        </div>

                        <div className={styles['group']} style={{ marginTop: '40px' }}>
                            <span className={styles['p-float-label']}>
                                {/* <Password
                                    value={password}
                                    inputClassName="input"
                                    style={{ width: '100%' }}
                                    onChange={e => setPassword(e.target.value)}
                                    strongRegex={strongPasswordPattern}
                                    toggleMask
                                /> */}
                                <input className={styles['input']} type="text" />
                                <label htmlFor="pass" style={{ paddingLeft: '20px' }} className={styles['label']}>Password</label>
                            </span>

                            {/* <ValidationMessage passwordStrengthMessage={showPasswordValidationMessage} /> */}
                        </div>

                        {/* <div className="group" style={{ marginTop: '40px' }}>
                            <InputSwitch id='check' checked={keepSigned} onChange={e => setKeepSigned(e.target.value)} />
                            <label htmlFor="check" style={{ color: '#ffffff', marginLeft: '10px' }}>
                                <b>Keep me Signed in</b>
                            </label>
                        </div> */}

                        <div className={styles['group']}>
                            <input type="submit" className={styles['button']} value="Sign In" />
                        </div>

                        <div className="hr"></div>

                        <div className={styles['foot-lnk']}><a href="#forgot">Forgot Password?</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default login;