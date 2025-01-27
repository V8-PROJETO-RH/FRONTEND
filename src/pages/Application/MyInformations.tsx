import React from 'react';
import { useStep } from '../../contexts/StepContext';
import { GoArrowRight } from 'react-icons/go';
import CustomInput from '../../components/Input';
import Checkbox from '../../components/Checkbox';

const MyInformations: React.FC = () => {
    const { currentStep, steps, nextStep } = useStep();

    return (
        <div className="container w-full h-full grid grid-cols-12 gap-8">
            <div className="col-span-9">
                <p className="text-light-gray font-bold text-xs mt-3 mb-11 uppercase">
                    Você está se candidatando para a vaga <span className="text-light-blue cursor-pointer underline">Desenvolvedor Front-End Sênior Angular</span>
                </p>
                <h2 className="text-xl font-semibold text-light-blue uppercase tracking-wide mb-12">Minhas Informações</h2>

                <div className="grid grid-cols-2 gap-6 mb-4">
                    <CustomInput label="Nome" fontLabel='bold' inputSize='large' placeholder="Inserir seu nome" className='uppercase text-xs !px-0' />
                    <CustomInput label="Sobrenome" fontLabel='bold' inputSize='large' placeholder="Inserir seu sobrenome" className='uppercase text-xs !px-0' />
                    <CustomInput label="CPF" fontLabel='bold' inputSize='large' placeholder="000.000.000-00" className='uppercase text-xs !px-0' />
                    <CustomInput label="Data de Nascimento" fontLabel='bold' inputSize='large' placeholder="DD/MM/AAAA" className='uppercase text-xs !px-0' />
                    <CustomInput label="E-mail" fontLabel='bold' inputSize='large' placeholder="Inserir seu e-mail" className='uppercase text-xs !px-0' />
                    <CustomInput label="Telefone" fontLabel='bold' inputSize='large' placeholder="(XX) X XXXX-XXXX" className='uppercase text-xs !px-0' />
                </div>

                <div className="mb-4">
                    <span className="font-bold block text-xs mb-3 uppercase">Gênero</span>
                    <div className="flex items-center space-x-8">
                        <div className='flex items-center'>
                            <Checkbox type='radio' id='masculino' name="genero" />
                            <label htmlFor='masculino' className='text-sm pt-0.5 text-light-gray ml-2'>Masculino</label>
                        </div>
                        <div className='flex items-center'>
                            <Checkbox type='radio' id='feminino' name="genero" />
                            <label htmlFor='feminino' className='text-sm pt-0.5 text-light-gray ml-2'>Feminino</label>
                        </div>
                        <div className='flex items-center'>
                            <Checkbox type='radio' id='nao_dizer' name="genero" />
                            <label htmlFor='nao_dizer' className='text-sm pt-0.5 text-light-gray ml-2'>Prefiro Não Dizer</label>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-4">
                    <div className="flex items-center space-x-3">
                        <CustomInput label="CEP" fontLabel='bold' inputSize='xsmall' placeholder="00000-000" className='uppercase text-xs !px-0' />
                        <span className="text-xs text-light-gray">Não sabe o CEP? <a href="https://example.com" className="text-light-blue underline">Digite aqui</a></span>
                    </div>
                    <CustomInput label="Endereço" fontLabel='bold' inputSize='large' placeholder="Inserir seu endereço" className='uppercase text-xs !px-0' />
                </div>

                <div className="grid grid-cols-5 gap-6 mb-4">
                    <CustomInput label="Número" fontLabel='bold' inputSize='xsmall' placeholder="Número" className='uppercase text-xs !px-0' />
                    <CustomInput label="Complemento" fontLabel='bold' inputSize='xsmall' placeholder="Complemento" className='uppercase text-xs !px-0' />
                    <CustomInput label="Bairro" fontLabel='bold' inputSize='medium' placeholder="Bairro" className='uppercase text-xs !px-0' />
                    <CustomInput label="Cidade" fontLabel='bold' inputSize='medium' placeholder="Cidade" className='uppercase text-xs !px-0' />
                    <CustomInput label="Estado" fontLabel='bold' inputSize='xsmall' placeholder="Estado" className='uppercase text-xs !px-0' />
                </div>

                <div className="mt-16 flex justify-end">
                    <button
                        onClick={nextStep}
                        className="bg-light-blue hover:bg-dark-blue text-white font-bold text-sm w-[373px] h-[50px] p-[22px] justify-between tracking-widest rounded-lg flex items-center uppercase"
                        disabled={currentStep === steps.length - 1}
                    >
                        Salvar e Continuar <GoArrowRight className="ml-2 text-3xl" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MyInformations;