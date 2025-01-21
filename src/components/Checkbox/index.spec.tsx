import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Checkbox from "./";

// Teste para o tipo "checkbox"
describe('Checkbox component (checkbox type)', () => {
    test('renders checkbox correctly', () => {
        const { container } = render(<Checkbox id="checkbox1" type="checkbox" />);
        
        // Verifica se o input do checkbox está presente
        const checkboxInput = screen.getByRole('checkbox');
        expect(checkboxInput).toBeInTheDocument();
        
        // Verifica se o label está presente (o círculo)
        const checkboxLabel = container.querySelector('label');
        expect(checkboxLabel).toBeInTheDocument();
    });

    test('displays CheckedIcon when checkbox is checked', () => {
        render(<Checkbox id="checkbox1" type="checkbox" />);

        // Marca o checkbox
        const checkboxInput = screen.getByRole('checkbox');
        fireEvent.click(checkboxInput);

        // Verifica se o CheckedIcon aparece após a seleção
        const checkedIcon = screen.getByTestId('checked-icon');
        expect(checkedIcon).toBeInTheDocument();
    });
});

// Teste para o tipo "radio"
describe('Checkbox component (radio type)', () => {
    test('renders radio button correctly', () => {
        const { container } = render(<Checkbox id="radio1" type="radio" />);
        
        // Verifica se o input do radio está presente
        const radioInput = screen.getByRole('radio');
        expect(radioInput).toBeInTheDocument();
        
        // Verifica se o label do radio (círculo) está presente
        const radioLabel = container.querySelector('label');
        expect(radioLabel).toBeInTheDocument();
    });

    test('displays inner circle when radio is selected', async () => {
        render(<Checkbox id="radio1" type="radio" />);

        // Marca o radio button
        const radioInput = screen.getByRole('radio');
        fireEvent.click(radioInput);

        // Verifica se o círculo interno aparece após a seleção
        const radioCircle = screen.getByTestId('radio-circle');

        // Espera pela mudança na classe "opacity-100"
        await waitFor(() => {
          expect(radioCircle).toHaveClass('peer-checked:opacity-100');
        });
    });
});
