import React from 'react';
import styles from './Card.module.css';

const Card: React.FC = ({children}) => {
    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Card
