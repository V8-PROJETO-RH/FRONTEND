import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from './select-filter';  

describe('Select Component', () => {
  const options = [
    { id: 1, name: 'Opção 1' },
    { id: 2, name: 'Opção 2' },
    { id: 3, name: 'Opção 3' },
  ];

  test('renders without crashing', () => {
    render(<Select label="Select Label" options={options} onChange={() => {}} />);
    expect(screen.getByText('Select Label')).toBeInTheDocument();
  });

  test('renders the correct number of options', () => {
    render(<Select label="Select Label" options={options} onChange={() => {}} />);
    expect(screen.getAllByRole('option').length).toBe(options.length + 1);
  });

  test('calls onChange with the correct value', () => {
    const handleChange = jest.fn();
    render(<Select label="Select Label" options={options} onChange={handleChange} />);

  
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Opção 2' } });
    expect(handleChange).toHaveBeenCalledWith('Opção 2');
  });

  test('displays IoIosArrowDown icon', () => {
    render(<Select label="Select Label" options={options} onChange={() => {}} />);
    const icon = screen.getByText((_content, element) => {
      return element?.tagName.toLowerCase() === 'svg';
    });
    expect(icon).toBeInTheDocument();
  });
});