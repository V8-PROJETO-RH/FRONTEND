import '@testing-library/jest-dom'; 

import { TextEncoder, TextDecoder } from 'util';


global.TextEncoder = global.TextEncoder || TextEncoder;
global.TextDecoder = global.TextDecoder || TextDecoder;


global.matchMedia = global.matchMedia || (() => ({
  matches: false,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));
