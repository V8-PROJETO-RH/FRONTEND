import React from "react";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    id: string;
    type: 'checkbox' | 'radio';
}