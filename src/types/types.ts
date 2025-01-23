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

  export interface JwtPayload{
    id: string; 
    nome: string;
    email: string;
    senha: string;
  }