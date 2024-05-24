import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    children,
    primary,
    outline = false,
    small = false,
    large = false,
    rounded,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = { onClick, ...passProps };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', { primary, outline, large, small, rounded });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
