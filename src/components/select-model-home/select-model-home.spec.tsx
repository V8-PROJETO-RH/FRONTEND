import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from './select-model-home';  // Ajuste o caminho se necessário

describe('Select Component', () => {
  const options = [
    { id: 1, name: 'Opção 1' },
    { id: 2, name: 'Opção 2' },
    { id: 3, name: 'Opção 3' },
  ];

  test('renders without crashing and displays the label', () => {
    render(<Select label="Select a location" options={options} onChange={() => {}} />);
    // Verifique se o label aparece na tela
    expect(screen.getByText('Select a location')).toBeInTheDocument();
  });

  test('renders the correct number of options', () => {
    render(<Select label="Select a location" options={options} onChange={() => {}} />);
    // Inclui a opção desabilitada padrão
    expect(screen.getAllByRole('option').length).toBe(options.length + 1);
  });

  test('calls onChange with the correct value when an option is selected', () => {
    const handleChange = jest.fn();
    render(<Select label="Select a location" options={options} onChange={handleChange} />);
    
    // Simulate changing the selected value
    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Opção 2' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('Opção 2');
  });

  test('applies custom classNames to label and options', () => {
    render(
      <Select 
        label="Select a location"
        options={options}
        onChange={() => {}}
        labelClassName="custom-label"
        optionClassName="custom-option"
      />
    );

    // Verifique a classe no rótulo
    expect(screen.getByText('Select a location')).toHaveClass('custom-label');

    // Verifique as classes nas opções
    options.forEach(option => {
      expect(screen.getByText(option.name)).toHaveClass('custom-option');
    });
  });

  test('displays IoIosArrowDown icon', () => {
    render(<Select label="Select a location" options={options} onChange={() => {}} />);
    
    // Verifique o ícone usando o "data-testid"
    const icon = screen.getByTestId('dropdown-icon');
    expect(icon).toBeInTheDocument();
  });
});