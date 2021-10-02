import { FooterProps } from "./Footer.props";
// styles
import styles from './Footer.module.css';
import cn from 'classnames';
import { format } from "date-fns";

const Footer: React.FC<FooterProps> = ({ className = 'footer', ...props }) => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div className={styles.wrapp}>
                <div>
                    Web-Esse © 2020 - {format(new Date(), 'yyyy')} All Rights Reserved
                </div>
                {/* <a href="#" target="_blank">Privacy Policy</a> */}
            </div>
        </footer>
    )
}

export default Footer;