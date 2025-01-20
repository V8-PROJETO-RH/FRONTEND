import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'special';
    className?: string;
    children: ReactNode;
}

const color = {
    'primary': 'bg-verde-energia',
    'secondary': 'bg-azul-tecnologia',
    'special': 'bg-gradient-to-r from-azul-tecnologia to-verde-energia',
}

export default function Button({ variant = 'primary', children, className, ...props }: ButtonProps) {
    return (
        <button className={`px-4 py-3 rounded-md ${color[variant]} ${className ? className : ''}`} {...props}>
            {children}
        </button>
    )
}   