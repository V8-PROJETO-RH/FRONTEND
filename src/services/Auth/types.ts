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
