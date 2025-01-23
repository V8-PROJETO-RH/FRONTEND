

import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../../types/types';

const UserService = {
  decodeToken: (token: string): JwtPayload => {
    try {
      
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded;
    } catch (error) {
      
      throw new Error('Token inválido');
    }
  },

};

export default UserService;