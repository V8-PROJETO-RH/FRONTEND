export interface LoginCredentials {
    email: string;
    senha: string;
  }
  
  export interface LoginResponse {
    token: string;
  }
  export interface RegisterData {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    dataNasc: Date;
    confirmarSenha: string;
  }
  
  export interface RegisterResponse {
    message: string;
  }