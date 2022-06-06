import React, { InputHTMLAttributes } from 'react';
import './FormInput.module.scss';

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement> & { value: string };

const FormInput: React.FC<FormInputProps> = ({ label, name, value, ...otherParams }) => {
    return (
        <div className='group'>
            {label && (
                <label className={`${value && value.length ? 'shrink' : ''} `}>
                    {label}
                </label>
            )}
            <input
                type='text'
                value={value}
                name={name}
                {...otherParams}
            />
        </div>
    )
}

export default FormInput