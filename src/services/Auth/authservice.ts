import { LoginCredentials, LoginResponse, RegisterData, RegisterResponse } from './types';

const API_URL = 'http://localhost:8081/login/api';

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
      const errorData = await response.text(); 
      throw new Error(errorData || 'Erro ao fazer login');
    }
    const token = await response.text();
    localStorage.setItem('token', token);

    return { token }; 
  },

  register: async (data: RegisterData): Promise<RegisterResponse> => {
    const response = await fetch(`${API_URL}/cadastro`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json(); 
      throw new Error(errorData.message || 'Erro ao registrar');
    }

    const result: RegisterResponse = await response.json();
    return result;
  },

  logout: () => {
    localStorage.removeItem('token'); 
  },

};

export default AuthService;