import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './';
import { useNavigate } from 'react-router-dom';

// Mock da navegação
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Layout Component', () => {
  it('deve renderizar corretamente os ícones e textos', () => {
    render(
      <Router>
        <Layout pageSelected="jobs" />
      </Router>
    );

    // Verificar se os textos estão visíveis
    expect(screen.getByText('Vagas')).toBeInTheDocument();
    expect(screen.getByText('Candidatos')).toBeInTheDocument();
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('deve aplicar as classes corretas com base na página selecionada', () => {
    render(
      <Router>
        <Layout pageSelected="jobs" />
      </Router>
    );

    // Verificar se a classe bg-azul-tecnologia está aplicada para "Vagas"
    expect(screen.getByText('Vagas').closest('div')).toHaveClass('bg-azul-tecnologia/[.15]');
    expect(screen.getByText('Vagas').closest('div')).not.toHaveClass('bg-none');
    
    // Verificar se a classe text-azul-tecnologia está aplicada para "Vagas"
    expect(screen.getByText('Vagas')).toHaveClass('text-azul-tecnologia');
  });

  it('deve chamar a função de navegação corretamente quando clicar nas opções', () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    render(
      <Router>
        <Layout pageSelected="jobs" />
      </Router>
    );

    // Simular clique no link "Vagas"
    fireEvent.click(screen.getByText('Vagas'));

    expect(navigate).toHaveBeenCalledWith('/adm/jobs');

    // Simular clique no link "Candidatos"
    fireEvent.click(screen.getByText('Candidatos'));

    expect(navigate).toHaveBeenCalledWith('/adm/candidates');

    // Simular clique no link "Dashboard"
    fireEvent.click(screen.getByText('Dashboard'));

    expect(navigate).toHaveBeenCalledWith('/adm/dashboard');
  });
});
