import AuthService from './authservice';
import { LoginCredentials, RegisterData, LoginResponse, RegisterResponse } from './types';


jest.spyOn(global.localStorage, 'setItem');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('AuthService', () => {
  describe('login', () => {
    it('should login successfully and store token', async () => {
      
      const mockResponse: LoginResponse = {
          token: 'fake-jwt-token',
          user: {
              id: '',
              nome: '',
              email: ''
          }
      };
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse),
        })
      ) as jest.Mock;

      const credentials: LoginCredentials = {
        email: 'test@example.com',
        senha: 'Password1!',
      };

      const response = await AuthService.login(credentials);

      expect(response.token).toBe('fake-jwt-token');
      expect(localStorage.setItem).toHaveBeenCalledWith('token', 'fake-jwt-token');
      expect(fetch).toHaveBeenCalledWith('http://localhost:8081/api/login', expect.anything());
    });

    it('should throw an error if login fails', async () => {
    
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
        })
      ) as jest.Mock;

      const credentials: LoginCredentials = {
        email: 'test@example.com',
        senha: 'wrongpassword',
      };

      await expect(AuthService.login(credentials)).rejects.toThrow('Erro ao fazer login');
    });
  });

  describe('register', () => {
    it('should register successfully', async () => {
      // Mock da resposta do fetch
      const mockResponse: RegisterResponse = { message: 'User registered successfully' };
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockResponse),
        })
      ) as jest.Mock;

      const registerData: RegisterData = {
        nome: 'Tester',
        email: 'tester@example.com',
        cpf: '123.456.789-01',
        dataNascimento: '1990-01-01',
        senha: 'Password1!',
        confirmarSenha: 'Password1!',
      };

      const response = await AuthService.register(registerData);

      expect(response.message).toBe('User registered successfully');
      expect(fetch).toHaveBeenCalledWith('http://localhost:8081/api/register', expect.anything());
    });

    it('should throw an error if registration fails', async () => {
      // Mock da resposta de falha do fetch
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
        })
      ) as jest.Mock;

      const registerData: RegisterData = {
        nome: 'Existing User',
        email: 'existing@example.com',
        cpf: '123.456.789-01',
        dataNascimento: '1990-01-01',
        senha: 'Password1!',
        confirmarSenha: 'Password1!',
      };

      await expect(AuthService.register(registerData)).rejects.toThrow('Erro ao registrar');
    });
  });
});