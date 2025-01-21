import { useState } from 'react';


export default function SelectModel() {
  const [workModel, setWorkModel] = useState('');

  const workModels = [
    { id: 1, name: 'Remoto' },
    { id: 2, name: 'Presencial' },
    { id: 3, name: 'Híbrido' },
  ];

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="relative w-full max-w-sm">
        <h5 className="text-lg mb-2">Modelo</h5> 
        <select
          value={workModel}
          onChange={(e) => setWorkModel(e.target.value)}
          className="w-50 p-2 border border-gray-300 rounded"
        >
          <option value="" disabled>
            Selecione o tipo
          </option>
          {workModels.map((model) => (
            <option key={model.id} value={model.name}>
              {model.name}
            </option>
          ))}
        </select>
      
      </div>
    </div>
  );
}
