import React, { InputHTMLAttributes } from 'react'

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: React.FC<FormInputProps> = ({ label, name, value, ...otherParams }) => {
    return (
        <label>
            <span>{label}</span>
            <input
                type='text'
                value={value}
                name={name}
                {...otherParams}
            />
        </label>
    )
}

export default FormInput