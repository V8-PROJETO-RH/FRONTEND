import { render, screen, fireEvent } from '@testing-library/react';
import SelectModel from './select-model'; 
import '@testing-library/jest-dom';

describe('SelectModel Component', () => {
  test('renders the select with options', () => {
    render(<SelectModel />);

    expect(screen.getByText(/modelo/i)).toBeInTheDocument();

  
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();

  
    expect(screen.getByText(/remoto/i)).toBeInTheDocument();
    expect(screen.getByText(/presencial/i)).toBeInTheDocument();
    expect(screen.getByText(/híbrido/i)).toBeInTheDocument();
  });

  test('changes the value of select when an option is selected', () => {
    render(<SelectModel />);

    const select = screen.getByRole('combobox');
    
  
    expect(select).toHaveValue('');


    fireEvent.change(select, { target: { value: 'Remoto' } });


    expect(select).toHaveValue('Remoto');
  });
});
