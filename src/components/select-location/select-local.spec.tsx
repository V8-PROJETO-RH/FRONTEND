import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasicSelectLocal from './select-local'; 

describe('BasicSelectLocal Component', () => {
  test('renders select with default placeholder', () => {
    render(<BasicSelectLocal />);
    

    expect(screen.getByText('Pesquise por localidade')).toBeInTheDocument();
    

    expect(screen.getByText('Selecione o local')).toBeInTheDocument();
  });

  test('allows user to select a location', () => {
    render(<BasicSelectLocal />);
    
    
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'São Paulo' } });
    
    
    expect(screen.getByRole('combobox')).toHaveValue('São Paulo');
  });
});