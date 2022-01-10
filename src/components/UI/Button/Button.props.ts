import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance? : 'primary' | 'ghost',
    arrow?: 'right' | 'down' | 'none',
    callback?: (evt: React.FormEvent) => void,
}