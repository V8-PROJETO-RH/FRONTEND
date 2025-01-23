export interface LoginCredentials {
    email: string;
    senha: string;
  }
  
  export interface LoginResponse {
    token: string;
    user: {
      id: string;
      nome: string;
      email: string;
    };
  }
  export interface RegisterData {
    nome: string;
    email: string;
    senha: string;
    cpf: string;
    dataNascimento: string;
  }
  
  export interface RegisterResponse {
    message: string;
    // Inclua outros campos que o backend retorna, como um token, se aplicável.
  }