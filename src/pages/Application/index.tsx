import React, { useState } from 'react';
import { GrPrevious } from "react-icons/gr";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import Stepper from '../../components/Stepper';
import Checkbox from '../../components/Checkbox';
import CustomInput from '../../components/Input';

const Application: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    'Dados Adicionais',
    'Minhas Informações',
    'Minhas Experiências',
    'Minhas Habilidades',
    'Revisar',
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="container my-auto pt-4 pl-12 grid grid-cols-12 gap-8">
      <div className="col-span-3">
        <div className="mb-4">
          <button
            onClick={prevStep}
            className="flex items-center text-light-blue pr-4 py-2 rounded uppercase font-bold text-sm"
            disabled={currentStep === 0}
          >
            <GrPrevious className="mr-2 text-xl" />
            Voltar
          </button>
        </div>
        <hr className="border-t border-gray mb-6 w-[90%]" />
        <Stepper steps={steps} currentStep={currentStep} />
        <hr className="border-t border-gray mt-6 w-[90%]" />
        <div className="mt-8 w-[80%] ml-4">
          <h2 className="text-sm text-custom-text-select-blue font-bold mb-4 uppercase">Sobre a Empresa</h2>
          <p className="text-xs text-black leading-relaxed">
            Há 10 anos no mercado, a V8.Tech é uma empresa jovem, movida por tecnologia e inovação, que acelera a transformação digital. Ajudamos nossos clientes a revolucionarem seus negócios por meio da reestruturação e evolução, com foco na otimização de processos, tecnologia da informação, transformação digital e no crescimento em diversos setores.
          </p><br />
          <p className="text-xs text-black leading-relaxed">
            Atendemos diversos países na América Latina a partir de nosso escritório em São Paulo: Argentina, Colômbia, Peru e México.
          </p>
          <div className="flex items-center space-x-4 mt-10">
            <span className="uppercase text-xs font-bold text-light-gray">Siga nos</span>
            <FaInstagram className="text-light-gray text-lg" />
            <FaLinkedin className="text-light-gray text-lg" />
            <FaYoutube className="text-light-gray text-lg" />
          </div>
        </div>
      </div>

      <div className="col-span-9 ml-12 w-[100%]">
        <p className="text-light-gray font-bold text-sm mt-3 mb-11 uppercase">
          Você está se candidatando para a vaga <span className="text-light-blue underline">Desenvolvedor Front-End Sênior Angular</span>
        </p>
        <h2 className="text-xl font-semibold text-light-blue uppercase tracking-wide mb-12">Dados Adicionais</h2>

        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 mb-2">
            <span className="font-semibold block mt-2 mb-4 uppercase">Alguém que trabalha nesta empresa indicou você para esta vaga?</span>
            <div className="flex items-center space-x-16">
              <div className='flex'>
                <Checkbox type='radio' id='yes' />
                <label htmlFor='yes' className='uppercase text-light-gray'>Sim</label>
              </div>
              <div className='flex'>
                <Checkbox type='radio' id='no' />
                <label htmlFor='no' className='uppercase text-light-gray'>Não</label>
              </div>
            </div>
          </div>
          <CustomInput label="Nome da pessoa que te indicou" placeholder="Nome" className='uppercase !px-0' />
          <CustomInput label="E-mail da pessoa que te indicou" placeholder="Email" className='uppercase !px-0' />
          <div className="col-span-1">
            <span className="font-semibold block uppercase mt-2 mb-4">Você já trabalhou na empresa V8 Tech?</span>
            <div className="flex items-center space-x-16">
              <div className='flex'>
                <Checkbox type='radio' id='yes2' />
                <label htmlFor='yes2' className='uppercase text-light-gray'>Sim</label>
              </div>
              <div className='flex'>
                <Checkbox type='radio' id='no2' />
                <label htmlFor='no2' className='uppercase text-light-gray'>Não</label>
              </div>
            </div>
          </div>
          <CustomInput label="Pretensão Salarial *" placeholder="R$" className='uppercase !px-0' />
          <div className="col-span-2">
            <CustomInput label="Onde você encontrou essa vaga? (Opcional)" placeholder="Descreva aqui" className='uppercase !px-0' />
          </div>
        </div>

        <div className="mt-16 flex justify-end">
          <button
            onClick={nextStep}
            className="bg-light-blue hover:bg-dark-blue text-white text-sm font-bold px-10 gap-16 py-4 tracking-wider rounded-lg flex items-center uppercase"
            disabled={currentStep === steps.length - 1}
          >
            Salvar e Continuar <GoArrowRight className="ml-2 text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Application;