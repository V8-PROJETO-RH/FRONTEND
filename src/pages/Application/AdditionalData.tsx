import { GoArrowRight } from "react-icons/go";
import Checkbox from '../../components/Checkbox';
import CustomInput from '../../components/Input';
import { useStep } from '../../contexts/StepContext';

const AdditionalData: React.FC = () => {
  const { currentStep, steps, nextStep } = useStep();

  return (
    <div className="container my-auto grid grid-cols-12 gap-8">
      <div className="col-span-9">
        <p className="text-light-gray font-bold text-xs mt-3 mb-11 uppercase">
          Você está se candidatando para a vaga <span className="text-light-blue cursor-pointer underline">Desenvolvedor Front-End Sênior Angular</span>
        </p>
        <h2 className="text-xl font-semibold text-light-blue uppercase tracking-wide mb-12">Dados Adicionais</h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 mb-2">
            <span className="font-bold block text-xs mb-3 uppercase">Alguém que trabalha nesta empresa indicou você para esta vaga?</span>
            <div className="flex items-center space-x-16">
              <div className='flex'>
                <Checkbox type='radio' id='yes' name="question1" />
                <label htmlFor='yes' className='uppercase text-sm pt-0.5 text-light-gray'>Sim</label>
              </div>
              <div className='flex'>
                <Checkbox type='radio' id='no' name="question1" />
                <label htmlFor='no' className='uppercase text-sm pt-0.5 text-light-gray'>Não</label>
              </div>
            </div>
          </div>
          <CustomInput label="Nome da pessoa que te indicou" fontLabel='bold' inputSize='small' placeholder="Nome" className='uppercase text-xs !px-0' />
          <CustomInput label="E-mail da pessoa que te indicou" fontLabel='bold' inputSize='small' placeholder="Email" className='uppercase text-xs !px-0' />
          <div className="col-span-1">
            <span className="font-bold block uppercase text-xs mb-3">Você já trabalhou na empresa V8 Tech?</span>
            <div className="flex items-center space-x-16">
              <div className='flex'>
                <Checkbox type='radio' id='yes2' name="question2" />
                <label htmlFor='yes2' className='uppercase text-sm pt-0.5 text-light-gray'>Sim</label>
              </div>
              <div className='flex'>
                <Checkbox type='radio' id='no2' name="question2" />
                <label htmlFor='no2' className='uppercase text-sm pt-0.5 text-light-gray'>Não</label>
              </div>
            </div>
          </div>
          <CustomInput label="Pretensão Salarial *" fontLabel='bold' inputSize='small' placeholder="R$" className='uppercase text-xs !px-0' />
          <div className="col-span-2">
            <CustomInput label="Onde você encontrou essa vaga? (Opcional)" fontLabel='bold' inputSize='small' placeholder="Descreva aqui" className='uppercase text-xs !px-0' />
          </div>
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

export default AdditionalData;