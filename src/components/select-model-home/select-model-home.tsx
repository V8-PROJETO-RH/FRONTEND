import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

interface Option {
  id: number;
  name: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  onChange: (value: string) => void;
  labelClassName?: string;
  optionClassName?: string;
}

const Select: React.FC<SelectProps> = ({ label, options, onChange, labelClassName, optionClassName }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <div className="relative w-full max-w-md bg-custom-background-select rounded border border-gray-300">
        {label && <div className={`text-custom-text-select-blue mb-1 pl-2 ${labelClassName}`}>{label}</div>}
        <select
          value={selectedValue}
          onChange={handleChange}
          className="w-full text-custom-text-select-gray p-2 bg-custom-background-select text-gray-500 bg-white rounded border-none focus:outline-none appearance-none"
        >
          <option value="" disabled>
            Selecione o local
          </option>
          {options.map((option) => (
            <option key={option.id} value={option.name} className={optionClassName}>
              {option.name}
            </option>
          ))}
        </select>
        <IoIosArrowDown
          className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-custom-text-select-blue text-xl"
          data-testid="dropdown-icon"
        />
      </div>
    </div>
  );
};

export default Select;