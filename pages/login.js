import styles from '../styles/Login.module.css';

const login = () => {
    return (
        <div className={styles['body']}>
            <div className={styles['login-wrap']}>
                <div className={styles['login-html']}>
                    <input id="tab-1" type="radio" name="tab" className={styles['sign-in']} defaultChecked />
                    <label htmlFor="tab-1" className={styles['tab']}><center>Sign In</center></label>

                    <div className={styles['login-form']}>
                        <div className={styles['group']}>
                            <span className={styles['p-float-label']}>
                                <input className={styles['input']} type="text" />
                                <label htmlFor="user" style={{ paddingLeft: '20px' }} className={styles['label']}>Username</label>
                            </span>
                        </div>

                        <div className={styles['group']} style={{ marginTop: '40px' }}>
                            <span className={styles['p-float-label']}>
                                <input className={styles['input']} type="text" />
                                <label htmlFor="pass" style={{ paddingLeft: '20px' }} className={styles['label']}>Password</label>
                            </span>
                        </div>

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