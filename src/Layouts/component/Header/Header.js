import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone} from "@fortawesome/free-solid-svg-icons";


import { IconMore } from "../../../components/Icons";
import { Logo } from "../../../components/Logo";
import Login from "../Login";
import Search from "../Search";
import Setting from "../Setting";

const cx = classNames.bind(styles);
function Header() {
  const [openSideBar, setOpenSideBar] = useState(true);
  console.log(openSideBar)

  return (
    <div className={cx("wrapper")}>
      <div className={cx("start")}>
        <div onClick={() => {
          openSideBar ? setOpenSideBar(false) : setOpenSideBar(true);
        }} className={cx('more')}><IconMore /></div> 
        <Logo className={cx("logo")}/>
      </div>
      <div className={cx("center")}>
        <Search></Search>
        <div className={cx('iconMicro')}><FontAwesomeIcon icon={faMicrophone}/></div>
      </div>

      <div className={cx("end")}>
        <Setting></Setting>
        <Login></Login>
      </div>
    </div>
  );
}


export default Header;
