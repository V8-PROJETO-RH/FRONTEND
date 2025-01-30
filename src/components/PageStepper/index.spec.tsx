import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageStepper from '.';

describe('Stepper Component', () => {
  const steps = ['Step 1', 'Step 2', 'Step 3'];

  it('should render all steps with the correct labels', () => {
    render(<PageStepper steps={steps} currentStep={0} />);

    steps.forEach((step) => {
      expect(screen.getByText(step)).toBeInTheDocument();
    });
  });

  it('should highlight the active step', () => {
    render(<PageStepper steps={steps} currentStep={1} />);

    const activeStep = screen.getByText('Step 2');
    expect(activeStep).toHaveClass('text-light-blue');
  });

  it('should show completed steps with the correct styling', () => {
    render(<PageStepper steps={steps} currentStep={2} />);

    const completedStep = screen.getByText('Step 1');
    expect(completedStep).toHaveClass('text-light-blue');

    const completedIndicator = screen.getAllByRole('presentation')[0];
    expect(completedIndicator.firstChild).toHaveClass('bg-light-blue');
  });

  it('should render the correct number of steps', () => {
    render(<PageStepper steps={steps} currentStep={0} />);

    const renderedSteps = screen.getAllByText(/Step/);
    expect(renderedSteps).toHaveLength(steps.length);
  });

  it('should render the connector between steps correctly', () => {
    render(<PageStepper steps={steps} currentStep={1} />);

    const connectors = screen.getAllByRole('presentation');
    expect(connectors.length).toBe(steps.length - 1);
  });

  it('should handle the last step correctly', () => {
    render(<PageStepper steps={steps} currentStep={2} />);

    const lastStep = screen.getByText('Step 3');
    expect(lastStep).toHaveClass('text-light-blue');
  });
});
