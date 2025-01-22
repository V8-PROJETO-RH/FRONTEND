// CustomInput.spec.tsx

import { render, screen, fireEvent } from '@testing-library/react';
import { AiOutlineMenu } from 'react-icons/ai';
import CustomInput from './index';

describe('CustomInput component', () => {
  test('renders with specified background color', () => {
    render(<CustomInput label="Email" bgColor="bg-red-500" id="email-input" />);
    const inputContainer = screen.getByRole('textbox').parentElement;
    expect(inputContainer).toHaveClass('bg-red-500');
  });

  test('shows suggestions when typing', () => {
    const suggestions = ['React', 'Angular', 'Vue'];
    render(<CustomInput label="Search" isSearch={true} suggestions={suggestions} id="search-input" />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Re' } });
    
    expect(screen.getByText(/react/i)).toBeInTheDocument();
  });

  test('opens dropdown with icon click (toggleDropdownIcon)', () => {
    const suggestions = ['Option 1', 'Option 2'];
    render(
      <CustomInput
        label="Menu"
        isSearch={true}
        toggleDropdownIcon={true}
        suggestions={suggestions}
        icon={<AiOutlineMenu />}
        id="menu-input"
      />
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(screen.getByText(/option 1/i)).toBeInTheDocument();
  });

  test('closes dropdown when clicking outside', () => {
    const suggestions = ['Option 1', 'Option 2'];
    render(
      <div>
        <CustomInput label="Search" isSearch={true} suggestions={suggestions} id="search-input" />
        <button>Outside</button>
      </div>
    );

    const input = screen.getByRole('textbox');
    fireEvent.focus(input);
    fireEvent.change(input, { target: { value: 'Op' } });

    expect(screen.getByText(/option 1/i)).toBeInTheDocument();

    const outsideButton = screen.getByText(/outside/i);
    fireEvent.click(outsideButton);

    expect(screen.queryByText(/option 1/i)).not.toBeInTheDocument();
  });
});