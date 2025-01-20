import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasicSelectLocal from './select-local'; // ajuste o caminho conforme necessário

describe('BasicSelectLocal Component', () => {
  test('renders select with default placeholder', () => {
    render(<BasicSelectLocal />);
    
    // Verifica se o texto do título está presente
    expect(screen.getByText('Pesquise por localidade')).toBeInTheDocument();
    
    // Verifica se o select contém a opção padrão
    expect(screen.getByText('Selecione o local')).toBeInTheDocument();
  });

  test('allows user to select a location', () => {
    render(<BasicSelectLocal />);
    
    // Simula a seleção de uma localidade
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'São Paulo' } });
    
    // Verifica se o valor selecionado é atualizado
    expect(screen.getByRole('combobox')).toHaveValue('São Paulo');
  });
});