import { LoginCredentials, LoginResponse , RegisterData , RegisterResponse } from './types';


const API_URL = 'http://localhost:8081/api';

const AuthService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer login');
    }

    const data: LoginResponse = await response.json();
    localStorage.setItem('token', data.token);
    return data;
  },

  register: async (data: RegisterData): Promise<RegisterResponse> => {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Erro ao registrar');
    }

    const result: RegisterResponse = await response.json();
    return result;
  },
};

export default AuthService;