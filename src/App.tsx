import React from 'react';
import CustomInput from './components/Input';
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai';

const App: React.FC = () => {
  const suggestions = [
    "Desenvolvedor(a) Front-end",
    "Desenvolvedor(a) React",
    "Desenvolvedor(a) Angular",
    "Desenvolvedor(a) Java",
    "Desenvolvedor(a) Back-end",
    "Engenheiro(a) de Software",
  ];
  const suggestions2 = [
    "React",
    "Angular",
    "Javascript",
    "Java",
    "Kotlin",
    "VueJs",
    "Python"
  ]

  return (
    <div className="p-4 space-y-4">
      <CustomInput label="E-mail" type="text" placeholder="Digite seu e-mail" />
      <CustomInput label="Senha" type="password" placeholder="Digite sua senha" />
      <CustomInput 
        isSearch={true} 
        suggestions={suggestions} 
        bgColor='bg-primary-gray'
        icon={<AiOutlineSearch className="w-5 h-5 text-secundary-gray ml-2" />}
        placeholder="Pesquisar cargos ou palavras-chave"
      />
      <CustomInput 
        label="Habilidades" 
        isSearch={true} 
        toggleDropdownIcon={true}
        suggestions={suggestions2} 
        icon={<AiOutlineMenu className="w-5 h-5 text-secundary-gray ml-2" />}
        placeholder="Pesquisar habilidades ou palavras-chave"
      />
    </div>
  );
};

export default App;