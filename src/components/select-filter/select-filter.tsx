import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

interface Option {
  id: number;
  name: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <div className="relative w-full max-w-sm">
        {label && <h5 className="text-lg mb-2">{label}</h5>}
        <div className="relative">
          <select
            value={selectedValue}
            onChange={handleChange}
            className="w-full text-sm p-2 border border-gray-300 rounded appearance-none bg-white pr-10"
          >
            <option value="" disabled>
              Selecione o tipo
            </option>
            {options.map((option) => (
              <option key={option.id} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
          <IoIosArrowDown className="absolute right-3 top-1/2 -mt-2 pointer-events-none text-gray-500 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Select;