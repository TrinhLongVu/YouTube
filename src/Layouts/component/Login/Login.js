import classNames from "classnames/bind";
import styles from "./Login.module.scss";

const cx = classNames.bind(styles);

function Login() {
  return <button className={cx("container")} onClick={()=> {alert('1')}}>login</button>;
}

export default Login;
