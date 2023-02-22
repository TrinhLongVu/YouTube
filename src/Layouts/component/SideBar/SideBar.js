import classNames from "classnames/bind";
import ItemInSideBar from "./ItemInSideBar";
import styles from "./SideBar.module.scss";

import { IconHome, IconProtect, IconSetting, IconShort, IconSub } from "../../../components/Icons";

const cx = classNames.bind(styles);

const datasHeads = [
  {
    key: 1,
    icon: IconHome,
    content: 'Home',
    Link: '/'
  },
  {
    key: 2,
    icon: IconShort,
    content: 'Shorts',
    Link: '/Short'
  },
  {
    key: 3,
    icon: IconSub,
    content: 'Subcriptions',
    Link: '/Subcriptions'
  }
]

const dataMids = [
  {
    key: 4,
    icon: IconSetting,
    content: 'Setting',
    Link: '/Setting'
  },
  {
    key: 5,
    icon: IconProtect,
    content: 'Your data',
    Link: '/Yourdata'
  }
]

function SideBar() {
  return (
    <div className={cx("container")}>
      <div className={cx("blockItem")}>
        {
          datasHeads.map((data)=> {
           return <ItemInSideBar key={data.key} data = {data}/>
          })
        }
      </div>
      <div className={cx("blockItem")}>
        {
          dataMids.map((data)=> {
           return <ItemInSideBar key={data.key} data = {data}/>
          })
        }
      </div>
      <div className={cx('content')}>
      About Press Copyright Contact us Creator Advertise Developers
      </div>
      <div className={cx("blockItem")}>
        {
          datasHeads.map((data)=> {
           return <ItemInSideBar key={data.key} data = {data}/>
          })
        }
      </div>
      <div className={cx("blockItem")}>
        {
          dataMids.map((data)=> {
           return <ItemInSideBar key={data.key} data = {data}/>
          })
        }
      </div>
      <div className={cx('content')}>
      About Press Copyright Contact us Creator Advertise Developers
      </div>
      <div className={cx("blockItem")}>
        {
          datasHeads.map((data)=> {
           return <ItemInSideBar key={data.key} data = {data}/>
          })
        }
      </div>
      <div className={cx("blockItem")}>
        {
          dataMids.map((data)=> {
           return <ItemInSideBar key={data.key} data = {data}/>
          })
        }
      </div>
      <div className={cx('content')}>
      About Press Copyright Contact us Creator Advertise Developers
      </div>
    </div>
    
  );
  
}

export default SideBar;
