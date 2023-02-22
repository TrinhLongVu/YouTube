import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./ItemSearch.module.scss";
import { IconSearch } from "../../../../components/Icons/icons";

const cx = classNames.bind(styles);

function ItemSearch({ to, data }) {
  return (
    <Link to={to} className={cx("item")}>
      <div className={cx("icon")}>
        <IconSearch />
      </div>
      <div className={cx("content")}>{data}</div>
    </Link>
  );
}

export default ItemSearch;
