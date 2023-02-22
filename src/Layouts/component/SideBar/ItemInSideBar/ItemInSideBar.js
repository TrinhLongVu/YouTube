import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ItemInSideBar.module.scss";

const cx = classNames.bind(styles);

function ItemInSideBar({ data, active = "" }) {
  return (
    <Link to={data.Link} className={cx("item", { active })}>
      <div className={cx("icon")}>{<data.icon />}</div>
      <div className={cx("content")}>{data.content}</div>
    </Link>
  );
}

export default ItemInSideBar;
