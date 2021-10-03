import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

const Button: React.FC<ButtonProps> = ({ appearance='primary', arrow='none', callback,  children, className, ...props }) => (
    <button 
    className={cn(styles.button, className, {
        [styles.primary] : appearance === 'primary',
        [styles.primary] : appearance === 'ghost',
    })}
    onClick={callback}
    {...props}
    >
        {children}
        {arrow !== 'none' && <span className={cn(styles.arrow, {
            [styles.down] : arrow === 'down'
        })}><ArrowIcon /></span>}
    </button>
);

export default Button