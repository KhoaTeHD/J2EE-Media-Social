import styles from '@/styles/Login.module.css'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Login = () => {
    return (
        <div className={styles.container}>
             <Head>
                <title>Đăng nhập</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <link href='https://fonts.googleapis.com/css?family=MuseoModerno' rel='stylesheet'>
                </link>
                <link href='https://fonts.googleapis.com/css?family=Saira Stencil One' rel='stylesheet'>
                </link>
                <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
                </link>
                <link href='https://fonts.googleapis.com/css?family=Mali' rel='stylesheet'>
                </link>
            </Head>
            <div className={styles.form_box}>
                <div className={styles.form_value}>
                    <form action="">
                        <h1 className={styles.title}>ĐĂNG NHẬP</h1>
                        <div className={styles.input_box}>
                            <input className={styles.input} type="text" required/>
                            <Image className={styles.icon} src="" alt="" width="35" height="35"></Image>
                            <label className={styles.text_input} htmlFor="">Tài khoản</label>
                            <div className={styles.underline} ></div>
                        </div>
                        <div className={styles.input_box}>
                            <input className={styles.input} type="text" required/>
                            <Image className={styles.icon} src="" alt="" width="35" height="35" ></Image>
                            <label className={styles.text_input} htmlFor="">Mật khẩu</label>
                            <div className={styles.underline} ></div>
                        </div>
                        <div className={styles.remember}>
                            <label htmlFor=''>
                                <input className={styles.checkbox} type="checkbox" />Ghi nhớ mật khẩu
                            </label>
                        </div>
                        <button className={styles.btnLogin}>ĐĂNG NHẬP</button>
                        <div className={styles.forget}>
                            <Link className={styles.text} href={"/ForgetPass"}>Quên mật khẩu?</Link>
                        </div>
                        <div className={styles.register}>
                            <p className={styles.p}>Không có tài khoản? <Link className={styles.text} href={"/Register"}>Đăng ký</Link></p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;