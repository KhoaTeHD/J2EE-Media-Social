import styles from '@/styles/Register.module.css'
import Link from 'next/link'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { useState } from 'react';
import { useRef } from 'react';
import AuthService from './api/auth-service';
const required = (value) => {
  if (!value) {
    return (
      <div className={styles.error} role="alert">
        Không để trống!
      </div>
    );
  }
};
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
const validEmail = (value) => {
  if (!isValidEmail(value)) {
    return (
      <div className={styles.error} role="alert">
        Phải nhập đúng cú pháp.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 6 || value.length > 20) {
    return (
      <div className={styles.error} role="alert">
        Tên người dùng từ 6 ký tự đến 20.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className={styles.error} role="alert">
        Mật khẩu từ 6 ký tự đến 20.
      </div>
    );
  }
};
const register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profile_name, setProfile_name] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  // const [errors, setErrors] = useState({}); 

  // const [email, setEmail] = useState("");

  const onChangeProfileName = (e) => {
    const profile_name = e.target.value;
    setProfile_name(profile_name);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(email, password, profile_name).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };
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
          <Form onSubmit={handleRegister} ref={form} className={styles.form_box}>
            {!successful && (
              <div>
                <div className={styles.input_box}>
                  {/* {error && <h2 className={styles.error_email}>{error}</h2>} */}
                  <Input className={styles.form_input} type="input"
                    name="email"
                    value={email}
                    onChange={onChangeEmail}
                    validations={[required, validEmail]}
                  />
                  <label for="name" className={styles.text_input}>Email</label>
                  {/* <div className={styles.underline}></div> */}
                </div>
                <div className={styles.input_box}>
                  <Input className={styles.form_input} type="password"
                    name="password"
                    value={password}
                    onChange={onChangePassword}
                    validations={[required, vpassword]}
                  />
                  <label className={styles.text_input} htmlFor="">Mật khẩu</label>
                  {/* <div className={styles.underline}></div> */}
                </div>
                <div className={styles.input_box}>
                  <Input className={styles.form_input} type="text"
                    name="profile_name"
                    value={profile_name}
                    onChange={onChangeProfileName}
                    validations={[required, vusername]}
                  />
                  <label className={styles.text_input} htmlFor="">Tên người dùng</label>
                  {/* <div className={styles.underline}></div> */}
                </div>
                <button type='submit' className={styles.btn}>Đăng ký</button>
              </div>
            )}
            {message && (
              <div className={styles.message}>
                <div
                  className={
                    successful ? "alert alert-success" : "alert alert-danger"
                  }
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
    </div>
  );
};
export default register;
