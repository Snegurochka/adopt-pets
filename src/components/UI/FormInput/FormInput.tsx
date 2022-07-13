import React, { InputHTMLAttributes } from 'react';
import styles from './FormInput.module.scss';
//import styles from  './form-input.module.css';

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & { value: string, label: string };

const FormInput: React.FC<FormInputProps> = ({ label, name, value, type='text', ...otherParams }) => {
    return (
        <div className={styles.group}>
            <input
                className={styles.formInput}
                type={type}
                value={value}
                name={name}
                {...otherParams}
            />
            {label && (
                <label className={`${value && value.length ? styles.shrink : ''} ${styles.label}`}>
                    {label}
                </label>
            )}
        </div>
    )
}

export default FormInput