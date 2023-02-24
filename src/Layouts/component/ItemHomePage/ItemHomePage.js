import classNames from "classnames/bind";
import styles from "./ItemHomePage.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ItemHomePage({data}) {
  return (
    <Link to={data.Link} className={cx("item")}>
      <img className={cx("image")} src={data.image} alt="img"></img>
      <div className={cx('container')}>
        <div className={cx("icon")}>
          <img src={data.icon} alt="icon"></img>
        </div>
        <div className={cx("content")}>
          <h5>{data.content}</h5>
          <p>{data.channel}</p>
          <p>{data.view}{data.date}</p>
        </div>
      </div>
    </Link>
  );
}

export default ItemHomePage;
