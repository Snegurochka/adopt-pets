import { FC, SelectHTMLAttributes } from "react";

type PropsType = SelectHTMLAttributes<HTMLSelectElement> & { label: string, value: string, options:string[] };

const FormSelect:FC<PropsType> = ({ id, label, value, options, ...otherParams }) => {
  return (
    <label htmlFor={id}>
    {label}
    <select
        id={id}
        value={value}
        {...otherParams}
    >
        <option />
        {options.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
    </select>
</label>
  )
}

export default FormSelect