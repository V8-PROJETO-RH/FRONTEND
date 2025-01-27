import { render, screen, act } from '@testing-library/react';
import { StepProvider, useStep } from './StepContext';

const TestComponent = () => {
  const { currentStep, steps, nextStep, prevStep } = useStep();

  return (
    <div>
      <div data-testid="current-step">Current Step: {currentStep}</div>
      <div data-testid="step-label">Step Label: {steps[currentStep]}</div>
      <button data-testid="next-step" onClick={nextStep}>
        Next Step
      </button>
      <button data-testid="prev-step" onClick={prevStep}>
        Previous Step
      </button>
    </div>
  );
};

describe('StepContext', () => {
  it('should provide initial step values', () => {
    render(
      <StepProvider>
        <TestComponent />
      </StepProvider>
    );

    expect(screen.getByTestId('current-step')).toHaveTextContent('Current Step: 0');
    expect(screen.getByTestId('step-label')).toHaveTextContent('Step Label: Dados Adicionais');
  });

  it('should move to the next step', () => {
    render(
      <StepProvider>
        <TestComponent />
      </StepProvider>
    );

    const nextStepButton = screen.getByTestId('next-step');

    act(() => {
      nextStepButton.click();
    });

    expect(screen.getByTestId('current-step')).toHaveTextContent('Current Step: 1');
    expect(screen.getByTestId('step-label')).toHaveTextContent('Step Label: Minhas Informações');
  });

  it('should move to the previous step', () => {
    render(
      <StepProvider>
        <TestComponent />
      </StepProvider>
    );

    const nextStepButton = screen.getByTestId('next-step');
    const prevStepButton = screen.getByTestId('prev-step');

    act(() => {
      nextStepButton.click();
    });

    expect(screen.getByTestId('current-step')).toHaveTextContent('Current Step: 1');

    act(() => {
      prevStepButton.click();
    });

    expect(screen.getByTestId('current-step')).toHaveTextContent('Current Step: 0');
    expect(screen.getByTestId('step-label')).toHaveTextContent('Step Label: Dados Adicionais');
  });

  it('should not move beyond the last step', () => {
    render(
      <StepProvider>
        <TestComponent />
      </StepProvider>
    );

    const nextStepButton = screen.getByTestId('next-step');

    act(() => {
      for (let i = 0; i < 10; i++) nextStepButton.click();
    });

    act(() => {
      nextStepButton.click();
    });

    expect(screen.getByTestId('current-step')).toHaveTextContent('Current Step: 2');
    expect(screen.getByTestId('step-label')).toHaveTextContent('Step Label: Minhas Experiências');
  });

  it('should not move before the first step', () => {
    render(
      <StepProvider>
        <TestComponent />
      </StepProvider>
    );

    const prevStepButton = screen.getByTestId('prev-step');

    act(() => {
      prevStepButton.click();
    });

    expect(screen.getByTestId('current-step')).toHaveTextContent('Current Step: 0');
    expect(screen.getByTestId('step-label')).toHaveTextContent('Step Label: Dados Adicionais');
  });

  it('should throw an error if useStep is used outside StepProvider', () => {
    const TestInvalidUsage = () => {
      useStep();
      return null;
    };

    expect(() => render(<TestInvalidUsage />)).toThrowError(
      'useStep must be used within a StepProvider'
    );
  });
});
