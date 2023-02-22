import classNames from "classnames/bind";
import styles from './SideBar.module.scss'
import {IconProtect} from '../../../components/Icons'


const cx = classNames.bind(styles)

function SideBar() {
    return ( <div className={cx('container')}>
        <div className={cx('item')}>
            <div><IconProtect /></div>
            <div>Protected</div>
        </div>
    </div> );
}

export default SideBar;