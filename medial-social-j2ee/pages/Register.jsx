import styles from '@/styles/Register.module.css'
import Link from 'next/link'

const register = () => {

  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1 className={styles.welcome}>Fakeins.</h1>
          <p className={styles.desc}>
            Bạn cần nhập đủ thông tin và chính xác để tham gia vào mạng xã hội của chúng tôi.
          </p>
          <span className={styles.not}>Bạn đã có tài khoản?</span>
          <Link className={styles.btnLogin} href={"/"}>Đăng nhập</Link>

        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>Register</h1>
          <form className={styles.form_box}>
            <input className={styles.input} type="email" placeholder="Email" />

            <input className={styles.input} type="password" placeholder="Mật khẩu" />
            <input className={styles.input} type="password" placeholder="Nhập lại mật khẩu" />
            <input className={styles.input} type="text" placeholder="Tên" />
            <button className={styles.btn}>Đăng ký</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default register;