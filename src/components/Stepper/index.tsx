
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

interface StepperProps {
  qtdSteps: number;
  currentStep: number;
  setCurrentStep: (step: number) => void;
}

export default function Stepper({qtdSteps, currentStep, setCurrentStep, }: StepperProps) {

  function showSteps(qtdSteps: number, currentStep: number) {
    const steps = [];

    if (qtdSteps <= 5) {
      for (let step = 0; step < qtdSteps; step++) {
        steps.push(
          <div
            key={step}
            className={`w-[31px] h-[31px] rounded-[31px] flex items-center justify-center 
              ${step + 1 === currentStep ? 'bg-gradient-to-b from-light-blue to-verde-energia' : 'hover:bg-light-blue'}
              cursor-pointer`}
            onClick={() => setCurrentStep(step + 1)}
          >
            <span
              className={`font-mont bg-white w-[27px] h-[27px] rounded-[27px] flex items-center justify-center font-semibold 
                ${step + 1 === currentStep ? 'text-light-blue' : 'text-transparent-gray hover:text-light-blue'}
                cursor-pointer`}
            >
              {step + 1 < 10 ? `0${step + 1}` : step + 1}
            </span>
          </div>
        );
      }
    } else {
      if (currentStep <= 3) {
        for (let step = 0; step < 5; step++) {
          steps.push(
            <div
              key={step}
              className={`w-[31px] h-[31px] rounded-[31px] flex items-center justify-center 
                ${step + 1 === currentStep ? 'bg-gradient-to-b from-light-blue to-verde-energia' : 'hover:bg-light-blue'}
                cursor-pointer`}
              onClick={() => setCurrentStep(step + 1)}
            >
              <span
                className={`font-mont bg-white w-[27px] h-[27px] rounded-[27px] flex items-center justify-center font-semibold 
                  ${step + 1 === currentStep ? 'text-light-blue' : 'text-transparent-gray hover:text-light-blue'}
                  cursor-pointer`}
              >
                {step + 1 < 10 ? `0${step + 1}` : step + 1}
              </span>
            </div>
          );
        }
        steps.push(
          <span
            key="ellipsis-start"
            className="text-transparent-gray font-semibold cursor-pointer"
            onClick={() => setCurrentStep(qtdSteps)}
          >
            {'...'}
          </span>
        );
      } else if (currentStep >= qtdSteps - 2) {
        steps.push(
          <span
            key="ellipsis-start"
            className="text-transparent-gray font-semibold cursor-pointer hover:text-light-blue"
            onClick={() => setCurrentStep(1)}
          >
            {'...'}
          </span>
        );
        for (let step = qtdSteps - 5; step < qtdSteps; step++) {
          steps.push(
            <div
              key={step}
              className={`w-[31px] h-[31px] rounded-[31px] flex items-center justify-center 
                ${step + 1 === currentStep ? 'bg-gradient-to-b from-light-blue to-verde-energia' : 'hover:bg-light-blue'}
                cursor-pointer`}
              onClick={() => setCurrentStep(step + 1)}
            >
              <span
                className={`font-mont bg-white w-[27px] h-[27px] rounded-[27px] flex items-center justify-center font-semibold 
                  ${step + 1 === currentStep ? 'text-light-blue' : 'text-transparent-gray hover:text-light-blue'}
                  cursor-pointer`}
              >
                {step + 1 < 10 ? `0${step + 1}` : step + 1}
              </span>
            </div>
          );
        }
      } else {
        steps.push(
          <span
            key="ellipsis-start"
            className="text-transparent-gray font-semibold cursor-pointer hover:text-light-blue"
            onClick={() => setCurrentStep(1)}
          >
            {'...'}
          </span>
        );
        for (let step = currentStep - 2; step <= currentStep + 2; step++) {
          if (step > 0 && step <= qtdSteps) {
            steps.push(
              <div
                key={step}
                className={`w-[31px] h-[31px] rounded-[31px] flex items-center justify-center 
                  ${step === currentStep ? 'bg-gradient-to-b from-light-blue to-verde-energia' : 'hover:bg-light-blue'}
                  cursor-pointer`}
                onClick={() => setCurrentStep(step)}
              >
                <span
                  className={`font-mont bg-white w-[27px] h-[27px] rounded-[27px] flex items-center justify-center font-semibold 
                    ${step === currentStep ? 'text-light-blue' : 'text-transparent-gray hover:text-light-blue'}
                    cursor-pointer`}
                >
                  {step < 10 ? `0${step}` : step}
                </span>
              </div>
            );
          }
        }
        steps.push(
          <span
            key="ellipsis-end"
            className="text-transparent-gray font-semibold cursor-pointer hover:text-light-blue"
            onClick={() => setCurrentStep(qtdSteps)}
          >
            {'...'}
          </span>
        );
      }
    }

    return steps;
  }

  return (
    <div className="flex w-fit justify-between items-center gap-2">
      <button
        disabled={currentStep === 1}
        onClick={() => setCurrentStep(currentStep - 1)}
      >
        <MdOutlineKeyboardArrowLeft className="text-transparent-gray hover:text-light-blue" size={32} />
      </button>

      {showSteps(qtdSteps, currentStep)}

      <button
        disabled={currentStep === qtdSteps}
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        <MdKeyboardArrowRight className="text-transparent-gray hover:text-light-blue" size={32} />
      </button>
    </div>
  );
}