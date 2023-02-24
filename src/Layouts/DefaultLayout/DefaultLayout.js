import styles from "./DefaultLayout.module.scss";
import classNames from "classnames/bind";
import Header from "../component/Header";
import SideBar from "../component/SideBar";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx('sideBar')}><SideBar /></div>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
