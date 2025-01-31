import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import LoginComponent from './login';
import AuthService from "../../services/Auth/authservice";


jest.mock('../../services/Auth/authservice');

describe("LoginComponent", () => {
  beforeEach(() => {
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
});