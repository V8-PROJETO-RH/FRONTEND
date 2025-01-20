import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Testej from './testej'; 


describe('Testej Component', () => {
  it('renders the Testej component correctly', () => {
    render(<Testej />);
    const element = screen.getByText(/Hello world!/i);

    expect(element).toBeInTheDocument();
  });
});