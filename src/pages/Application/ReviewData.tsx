import React from 'react';
import { useStep } from '../../contexts/StepContext';
import { GoArrowRight } from 'react-icons/go';
import CustomInput from '../../components/Input';

const ReviewData: React.FC = () => {
    const { currentStep, steps, nextStep } = useStep();

    return (
        <div className="container my-auto grid grid-cols-12 gap-8">
            <div className="col-span-9">
                <p className="text-light-gray font-bold text-xs mt-3 mb-11 uppercase">
                    Você está se candidatando para a vaga <span className="text-light-blue cursor-pointer underline">Desenvolvedor Front-End Sênior Angular</span>
                </p>
                <h2 className="text-xl font-semibold text-light-blue uppercase tracking-wide mb-12">Revisar Dados</h2>

                <div className="grid grid-cols-2 gap-6">
                    <CustomInput label="Nome" fontLabel='bold' inputSize='medium' placeholder="Insira seu nome" className='uppercase text-xs !px-0' />
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

export default ReviewData;