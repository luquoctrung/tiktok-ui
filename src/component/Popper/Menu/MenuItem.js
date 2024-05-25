import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import DarkModeToggle from './Darkmode';
const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <div>
            <Button className={cx('menu-title')} to={data.to} leftIcon={data.icon}>
                {data.title}
                {data.input && <DarkModeToggle />}
            </Button>
        </div>
    );
}

export default MenuItem;
