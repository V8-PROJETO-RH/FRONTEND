import { LoginCredentials, LoginResponse } from '../../types/types';

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

};

export default AuthService;