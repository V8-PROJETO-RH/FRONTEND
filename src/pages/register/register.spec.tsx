import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import CadastroComponent from './register';
import AuthService from '../../services/Auth/authservice';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../services/Auth/authservice', () => ({
  register: jest.fn(),
}));

describe('CadastroComponent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders the registration form correctly', () => {
    render(
      <MemoryRouter>
        <CadastroComponent />
      </MemoryRouter>
    );
    // Verificação de Renderização
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/CPF/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data de Nascimento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Confirmar Senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument();
    expect(screen.getByText(/Já possui uma conta\? Entrar/i)).toBeInTheDocument();
  });

  test('displays validation errors when submitting empty', async () => {
    render(
      <MemoryRouter>
        <CadastroComponent />
      </MemoryRouter>
    );
    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));

    expect(await screen.findByText('Nome é obrigatório')).toBeVisible();
    expect(await screen.findByText('E-mail é obrigatório')).toBeVisible();
    expect(await screen.findByText('CPF é obrigatório')).toBeVisible();
    expect(await screen.findByText('Data de nascimento é obrigatória')).toBeVisible();
    expect(await screen.findByText('Senha é obrigatória')).toBeVisible();
  });

  test('formats CPF and data on change', async () => {
    render(
      <MemoryRouter>
        <CadastroComponent />
      </MemoryRouter>
    );

    const cpfInput = screen.getByLabelText(/CPF/i);
    fireEvent.change(cpfInput, { target: { value: '12345678901' } });

    await waitFor(() => {
      expect(cpfInput).toHaveValue('123.456.789-01');
    });

    const dataInput = screen.getByLabelText(/Data de Nascimento/i);
    fireEvent.change(dataInput, { target: { value: '01011990' } });

    await waitFor(() => {
      expect(dataInput).toHaveValue('01/01/1990');
    });
  });

  test('calls AuthService.register with correct data', async () => {
    render(
      <MemoryRouter>
        <CadastroComponent />
      </MemoryRouter>
    );
    
    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Tester' } });
    fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'tester@example.com' } });
    fireEvent.change(screen.getByLabelText(/CPF/i), { target: { value: '123.456.789-01' } });
    fireEvent.change(screen.getByLabelText(/Data de Nascimento/i), { target: { value: '01/01/1990' } });
    fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: 'Password1!' } });
    fireEvent.change(screen.getByLabelText(/Confirmar Senha/i), { target: { value: 'Password1!' } });

    const mockRegister = AuthService.register as jest.Mock;
    mockRegister.mockResolvedValueOnce({});

    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));
    
    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledWith({
        nome: 'Tester',
        email: 'tester@example.com',
        cpf: '123.456.789-01',
        dataNascimento: '01/01/1990',
        senha: 'Password1!',
      });
    });
  });

  test('displays error message on registration failure', async () => {
    render(
      <MemoryRouter>
        <CadastroComponent />
      </MemoryRouter>
    );
    
    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Tester' } });
    fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'tester@example.com' } });
    fireEvent.change(screen.getByLabelText(/CPF/i), { target: { value: '123.456.789-01' } });
    fireEvent.change(screen.getByLabelText(/Data de Nascimento/i), { target: { value: '01/01/1990' } });
    fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: 'Password1!' } });
    fireEvent.change(screen.getByLabelText(/Confirmar Senha/i), { target: { value: 'Password1!' } });

    const mockRegister = AuthService.register as jest.Mock;
    mockRegister.mockRejectedValueOnce(new Error('Erro ao registrar'));

    fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));
    
    expect(await screen.findByText('Erro ao registrar')).toBeVisible();
  });
});