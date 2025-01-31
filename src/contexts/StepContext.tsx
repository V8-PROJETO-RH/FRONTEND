import React, { createContext, useContext, useState, ReactNode } from 'react';

type StepContextType = {
  currentStep: number;
  steps: string[];
  nextStep: () => void;
  prevStep: () => void;
};

const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = [
    'Dados Adicionais',
    'Minhas Informações',
    'Minhas Experiências',
    'Minhas Habilidades',
    'Revisar',
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <StepContext.Provider value={{ currentStep, steps, nextStep, prevStep }}>
      {children}
    </StepContext.Provider>
  );
};

export const useStep = () => {
  const context = useContext(StepContext);
  if (context === undefined) {
    throw new Error('useStep must be used within a StepProvider');
  }
  return context;
};