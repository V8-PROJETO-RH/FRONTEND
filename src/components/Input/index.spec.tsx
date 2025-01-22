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

  test('toggles password visibility', () => {
    render(<CustomInput label="Password" type="password" id="password-input" />);

    const toggleButton = screen.getByRole('button');
    const input = screen.getByRole('textbox');

    expect(input).toHaveAttribute('type', 'password');
    
    fireEvent.click(toggleButton);
    
    expect(input).toHaveAttribute('type', 'text');
    
    fireEvent.click(toggleButton);

    expect(input).toHaveAttribute('type', 'password');
  });

  test('adds selected item on Enter key press', () => {
    render(<CustomInput label="Input" isSearch={true} id="custom-input" />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'NewItem' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

    expect(screen.getByText(/newitem/i)).toBeInTheDocument();
  });

  test('removes selected item when clicking on remove icon', () => {
    const suggestions = ['Item1', 'Item2'];
    render(<CustomInput label="Input" isSearch={true} suggestions={suggestions} id="removable-item-input" />);

    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Item1' } });
    fireEvent.keyUp(input, { key: 'Enter', code: 'Enter' });

    const removeIcon = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeIcon);

    expect(screen.queryByText(/item1/i)).not.toBeInTheDocument();
  });

  test('clears input when clear icon is clicked', () => {
    render(<CustomInput label="Clearable" isSearch={true} id="clearable-input" />);

    const input = screen.getByRole('textbox');
    const clearIcon = screen.getByRole('button', { name: /clear/i });

    fireEvent.change(input, { target: { value: 'ClearMe' } });

    expect(input).toHaveValue('ClearMe');

    fireEvent.click(clearIcon);

    expect(input).toHaveValue('');
  });
});