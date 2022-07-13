import { FC, InputHTMLAttributes } from 'react'

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & { label: string, value: string };

const FormSearchInput:FC<FormInputProps> = ({ id, label, value, ...otherParams }) => {
    return (
        <label htmlFor={id}>
            {label}
            <input
                id={id}
                value={value}
                placeholder={label}
                {...otherParams}
            />
        </label>
    )
}

export default FormSearchInput