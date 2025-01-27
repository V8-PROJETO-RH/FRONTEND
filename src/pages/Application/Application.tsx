import React from 'react';
import { useStep } from '../../contexts/StepContext';
import Stepper from '../../components/Stepper';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { GrPrevious } from 'react-icons/gr';
import AdditionalData from './additionalData';
import MyInformations from './MyInformations';
import MyExperiences from './MyExperiences';
import MySkills from './MySkills';
import ReviewData from './ReviewData';

enum Step {
  AdditionalData = 0,
  MyInformations = 1,
  MyExperiences = 2,
  MySkills = 3,
  ReviewData = 4,
}

const Application: React.FC = () => {
  const { currentStep, steps, prevStep } = useStep();

  const renderStep = () => {
    switch (currentStep) {
      case Step.AdditionalData:
        return <AdditionalData />;
      case Step.MyInformations:
        return <MyInformations />;
      case Step.MyExperiences:
        return <MyExperiences />;
      case Step.MySkills:
        return <MySkills />;
      case Step.ReviewData:
        return <ReviewData />;
      default:
        return null;
    }
  };

  return (
    <div className="container my-auto pt-4 pl-12 grid grid-cols-12 max-w-max">
      <div className="col-span-3 pt-0.5">
        <div className="mb-4">
          <button
            onClick={prevStep}
            className="flex items-center text-light-blue pr-4 py-2 rounded uppercase font-bold text-xs"
            disabled={currentStep === 0}
          >
            <GrPrevious className="mr-2 text-sm" />
            Voltar
          </button>
        </div>
        <hr className="border-t border-gray mb-6 w-[64.5%]" />
        <Stepper steps={steps} currentStep={currentStep}/>
        <hr className="border-t border-gray mt-6 w-[64.5%]" />
        <div className="mt-8 w-[60%] ml-4">
          <h2 className="text-sm text-custom-text-select-blue font-bold mb-4 uppercase">Sobre a Empresa</h2>
          <p className="text-xs text-black leading-relaxed">
            Há 10 anos no mercado, a V8.Tech é uma empresa jovem, movida por tecnologia e inovação, que acelera a transformação digital. Ajudamos nossos clientes a revolucionarem seus negócios por meio da reestruturação e evolução, com foco na otimização de processos, tecnologia da informação, transformação digital e no crescimento em diversos setores.
          </p><br />
          <p className="text-xs text-black leading-relaxed">
            Atendemos diversos países na América Latina a partir de nosso escritório em São Paulo: Argentina, Colômbia, Peru e México.
          </p>
          <div className="flex items-center space-x-4 mt-10">
            <span className="uppercase text-xs font-bold text-light-gray">Siga nos</span>
            <FaInstagram className="text-light-gray text-xl" />
            <FaLinkedin className="text-light-gray text-xl" />
            <FaYoutube className="text-light-gray text-xl" />
          </div>
        </div>
      </div>
      <div className="col-span-9 w-full h-full">
        {renderStep()}
      </div>
    </div>
  );
};

export default Application;