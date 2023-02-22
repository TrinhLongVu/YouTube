import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { IconSearch } from "../../../../components/Icons/icons";
import styles from "./ItemSearch.module.scss"

const cx = classNames.bind(styles);



function ItemSearch({to, data}) {
    return ( <Link to = {to} className={cx('item')}>
        <div className={cx('icon')}><IconSearch /> </div>
        <div className={cx('content')}>{data}</div>
        </Link> );
}

export default ItemSearch;