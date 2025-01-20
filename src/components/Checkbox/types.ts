import React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    type: 'checkbox' | 'radio';
    children: string | React.ReactNode;
}