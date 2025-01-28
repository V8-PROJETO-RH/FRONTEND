// UserService.test.ts
import UserService from './userservice';
import { jwtDecode } from 'jwt-decode';

// Mock do jwtDecode
jest.mock('jwt-decode');

describe("UserService", () => {
  const validToken = "valid.token.payload";
  const invalidToken = "invalid.token.payload";

  it("should decode a valid token", () => {
    const decodedPayload = { userId: 1, name: "John Doe" }; 
    (jwtDecode as jest.Mock).mockReturnValue(decodedPayload);

    const result = UserService.decodeToken(validToken);

    expect(result).toEqual(decodedPayload);
    expect(jwtDecode).toHaveBeenCalledWith(validToken);
  });

  it("should throw an error when decoding an invalid token", () => {
    (jwtDecode as jest.Mock).mockImplementation(() => {
      throw new Error("Invalid token");
    });

    expect(() => UserService.decodeToken(invalidToken)).toThrow("Token inválido");
    expect(jwtDecode).toHaveBeenCalledWith(invalidToken);
  });
});