import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from './select-model-home'; 

describe('Select Component', () => {
  const options = [
    { id: 1, name: 'Opção 1' },
    { id: 2, name: 'Opção 2' },
    { id: 3, name: 'Opção 3' },
  ];

  test('renders without crashing and displays the label', () => {
    render(<Select label="Select a location" options={options} onChange={() => {}} />);
    expect(screen.getByText('Select a location')).toBeInTheDocument();
  });

  test('renders the correct number of options', () => {
    render(<Select label="Select a location" options={options} onChange={() => {}} />);
    expect(screen.getAllByRole('option').length).toBe(options.length + 1);
  });

  test('calls onChange with the correct value when an option is selected', () => {
    const handleChange = jest.fn();
    render(<Select label="Select a location" options={options} onChange={handleChange} />);
    
   
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


    expect(screen.getByText('Select a location')).toHaveClass('custom-label');

  
    options.forEach(option => {
      expect(screen.getByText(option.name)).toHaveClass('custom-option');
    });
  });

  test('displays IoIosArrowDown icon', () => {
    render(<Select label="Select a location" options={options} onChange={() => {}} />);
    
  
    const icon = screen.getByTestId('dropdown-icon');
    expect(icon).toBeInTheDocument();
  });
});