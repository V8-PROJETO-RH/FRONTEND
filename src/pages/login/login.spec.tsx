import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import LoginComponent from './login';
import AuthService from "../../services/Auth/authservice";
import { useNavigate } from 'react-router-dom';

jest.mock('../../services/Auth/authservice');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe("LoginComponent", () => {
  const mockNavigate = useNavigate as jest.Mock;

  beforeEach(() => {
    mockNavigate.mockClear();
    render(<LoginComponent />);
  });

  it("should render login form", () => {
    expect(screen.getByText(/LOGIN/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite seu e-mail/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite sua senha/i)).toBeInTheDocument();
  });

  it("should show error when submit with empty fields", async () => {
    fireEvent.click(screen.getByText(/ENTRAR/i));

    expect(await screen.findByText(/E-mail é obrigatório/i)).toBeInTheDocument();
    expect(await screen.findByText(/Senha é obrigatória/i)).toBeInTheDocument();
  });

  it("should not show error when submit with valid fields", async () => {
    fireEvent.change(screen.getByPlaceholderText(/Digite seu e-mail/i), {
      target: { value: "test@example.com" }
    });

    fireEvent.change(screen.getByPlaceholderText(/Digite sua senha/i), {
      target: { value: "Password123!" }
    });

    fireEvent.click(screen.getByText(/ENTRAR/i));

    await waitFor(() => {
      expect(AuthService.login).toHaveBeenCalledWith({
        email: "test@example.com",
        senha: "Password123!"
      });
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });

  it("should show an error message when login fails", async () => {
    (AuthService.login as jest.Mock).mockRejectedValueOnce(new Error("Login failed"));

    fireEvent.change(screen.getByPlaceholderText(/Digite seu e-mail/i), {
      target: { value: "test@example.com" }
    });

    fireEvent.change(screen.getByPlaceholderText(/Digite sua senha/i), {
      target: { value: "Password123!" }
    });

    fireEvent.click(screen.getByText(/ENTRAR/i));

    expect(await screen.findByText(/Login failed/i)).toBeInTheDocument();
  });

  it("should handle 'Mantenha logado' checkbox", () => {
    const checkbox = screen.getByLabelText(/Mantenha logado/i);
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
