import React from 'react';

interface StepProps {
  label: string;
  isActive: boolean;
  isCompleted: boolean;
  isLastStep: boolean;
}

const Step: React.FC<StepProps> = ({ label, isActive, isCompleted, isLastStep }) => (
  <div className="relative flex items-center">
    <div className="flex flex-col items-center">
      <div
        className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center z-10 ${
          isCompleted ? 'border-light-blue bg-white' : 'border-gray bg-white'
        }`}
      >
        <div
          className={`w-4 h-4 rounded-full ${
            isActive || isCompleted ? 'bg-light-blue' : 'bg-transparent'
          }`}
        />
      </div>
      {!isLastStep && (
        <div
          className={`absolute top-8 transform h-11 w-px ${
            isCompleted ? 'bg-light-blue' : 'bg-gray'
          }`}
        ></div>
      )}
    </div>
    <span
      className={`ml-2 ${
        isActive || isCompleted ? 'text-light-blue font-semibold text-md uppercase' : 'text-gray font-semibold text-md uppercase'
      }`}
    >
      {label}
    </span>
  </div>
);

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => (
  <div className="flex flex-col justify-between h-[362px] ml-4">
    {steps.map((label, index) => (
      <Step
        key={index}
        label={label}
        isActive={index === currentStep}
        isCompleted={index <= currentStep}
        isLastStep={index === steps.length - 1}
      />
    ))}
  </div>
);

export default Stepper;