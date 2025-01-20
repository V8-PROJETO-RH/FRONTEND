import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasicSelect from './select-model'; 

test('renders select with default option', () => {
  render(<BasicSelect />);
  

  expect(screen.getByText('Pesquise pelo Modelo de Trabalho')).toBeInTheDocument();
  
  
  expect(screen.getByText('Selecione o tipo')).toBeInTheDocument();
});

test('allows user to select a work model', () => {
  render(<BasicSelect />);
  
  
  fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Remoto' } });
  
  
  expect(screen.getByRole('combobox')).toHaveValue('Remoto');
});