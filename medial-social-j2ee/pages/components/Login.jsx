import styles from '@/styles/Login.module.css'
import Link from 'next/link'

const Login = () => {
    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <div className={styles.card}>
                    <div className={styles.left}>
                        <h1 className={styles.welcome}>Welcome to FakeIns</h1>
                        <p className={styles.desc}>
                            Hãy bắt đầu trang mạng xã hội để kết nối với bạn bè và chia sẻ những khoảng khắc thú vị của bạn với chúng tôi.
                        </p>
                        <span className={styles.not}>Bạn chưa có tài khoản?</span>
                        <Link className={styles.regis} href="/Register">Đăng ký</Link>.
                    </div>
                    <div className={styles.right}>
                        <div className={styles.title}>Đăng nhập</div>
                        <form className={styles.form_box}>
                            <input className={styles.input} type="text" placeholder="Username" />
                            <input className={styles.input} type="password" placeholder="Password" />
                            <button className={styles.btn}>Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;