import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CadastroComponent from "./register";
import AuthService from "../../services/Auth/authservice";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../services/Auth/authservice", () => ({
  register: jest.fn(),
}));

describe("CadastroComponent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar o formulário de cadastro", () => {
    render(
      <MemoryRouter>
        <CadastroComponent />
      </MemoryRouter>
    );

    expect(screen.getByText("CADASTRO")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Inserir seu nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite seu e-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("000.000.000-00")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("dd/mm/aaaa")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirme sua senha")).toBeInTheDocument();
  });

  it("deve mostrar erro ao tentar enviar formulário com campos vazios", async () => {
    render(
      <MemoryRouter>
        <CadastroComponent />
      </MemoryRouter>
    );

    fireEvent.submit(screen.getByRole("button", { name: /cadastrar/i }));

    await waitFor(() => {
      expect(screen.getByText("Nome é obrigatório")).toBeInTheDocument();
      expect(screen.getByText("E-mail é obrigatório")).toBeInTheDocument();
      expect(screen.getByText("CPF é obrigatório")).toBeInTheDocument();
      expect(screen.getByText("Data de nascimento é obrigatória")).toBeInTheDocument();
      expect(screen.getByText("Senha é obrigatória")).toBeInTheDocument();
    });
  });

  it("deve chamar AuthService.register ao enviar formulário válido", async () => {
    (AuthService.register as jest.Mock).mockResolvedValueOnce({});

    render(
      <MemoryRouter>
        <CadastroComponent />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByPlaceholderText("Inserir seu nome"), { target: { value: "João Silva" } });
    fireEvent.input(screen.getByPlaceholderText("Digite seu e-mail"), { target: { value: "joao@email.com" } });
    fireEvent.input(screen.getByPlaceholderText("000.000.000-00"), { target: { value: "123.456.789-00" } });
    fireEvent.input(screen.getByPlaceholderText("dd/mm/aaaa"), { target: { value: "01/01/2000" } });
    fireEvent.input(screen.getByPlaceholderText("Digite sua senha"), { target: { value: "Senha@123" } });
    fireEvent.input(screen.getByPlaceholderText("Confirme sua senha"), { target: { value: "Senha@123" } });

    fireEvent.submit(screen.getByRole("button", { name: /cadastrar/i }));

    await waitFor(() => {
      expect(AuthService.register).toHaveBeenCalledWith(
        expect.objectContaining({
          nome: "João Silva",
          email: "joao@email.com",
          cpf: "123.456.789-00",
          dataNasc: expect.any(String),
          senha: "Senha@123",
        })
      );
    });
  });

  it("deve exibir erro ao falhar no cadastro", async () => {
    (AuthService.register as jest.Mock).mockRejectedValueOnce(new Error("Erro ao cadastrar"));

    render(
      <MemoryRouter>
        <CadastroComponent />
      </MemoryRouter>
    );

    fireEvent.input(screen.getByPlaceholderText("Inserir seu nome"), { target: { value: "João Silva" } });
    fireEvent.input(screen.getByPlaceholderText("Digite seu e-mail"), { target: { value: "joao@email.com" } });
    fireEvent.input(screen.getByPlaceholderText("000.000.000-00"), { target: { value: "123.456.789-00" } });
    fireEvent.input(screen.getByPlaceholderText("dd/mm/aaaa"), { target: { value: "01/01/2000" } });
    fireEvent.input(screen.getByPlaceholderText("Digite sua senha"), { target: { value: "Senha@123" } });
    fireEvent.input(screen.getByPlaceholderText("Confirme sua senha"), { target: { value: "Senha@123" } });

    fireEvent.submit(screen.getByRole("button", { name: /cadastrar/i }));

    await waitFor(() => {
      expect(screen.getByText("Erro ao cadastrar")).toBeInTheDocument();
    });
  });
});
