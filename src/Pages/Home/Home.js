import SideBar from "../../Layouts/component/SideBar";

import classNames from "classnames/bind";
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function PageHome() {
  return (
    <div className={cx('container')}>
        <SideBar></SideBar>
        <div>Home</div>
    </div>
  );
}

export default PageHome;
