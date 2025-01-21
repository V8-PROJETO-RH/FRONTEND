import { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

export default function SelectLocation() {
  const [workModel, setWorkModel] = useState('');

  const workModels = [
    { id: 1, name: 'São Paulo' },
    { id: 2, name: 'Rio De Janeiro' },
    { id: 3, name: 'São Caetano' },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4">
      <div className="relative w-full max-w-md bg-custom-background-select rounded border border-gray-300">
        <div className="text-custom-text-select-blue mb-1 pl-2">Pesquise por localidade</div>
        <select
          value={workModel}
          onChange={(e) => setWorkModel(e.target.value)}
          className="w-full text-custom-text-select-gray p-2 bg-custom-background-select text-gray-500 bg-white rounded border-none focus:outline-none appearance-none"
        >
          <option value="" disabled>
          Selecione o local
          </option>
          {workModels.map((model) => (
            <option key={model.id} value={model.name}>
              {model.name}
            </option>
          ))}
        </select>
        <IoIosArrowDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-custom-text-select-blue text-xl" />
      </div>
    </div>
  );
}