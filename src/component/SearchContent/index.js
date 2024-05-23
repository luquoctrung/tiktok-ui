import classNames from 'classnames/bind';
import styles from './SearchContent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsSplitUpAndLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function SearchContent() {
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('search-content')}>
                <li className={cx('content')}>Tony Kroos</li>
            </ul>
        </div>
    );
}

export default SearchContent;
