# Projeto FRONTEND - V8 PROJETO RH

Este é o repositório para o frontend da V8 PROJETO RH, desenvolvido com React.

## Configuração Rápida

Siga os passos abaixo para clonar, instalar e executar o projeto localmente.

### 1. Clone o Repositório

Clone este repositório do GitHub para o seu ambiente de desenvolvimento local:

git clone https://github.com/V8-PROJETO-RH/FRONTEND.git

### 2. Instale as Dependências

npm install

### 3. Execute o Projeto

npm run dev

Depois de iniciá-lo, abra seu navegador e acesse:
http://localhost:5173



### Componentes: 


# Button Component

O componente `Button` é um botão reutilizável que aceita diferentes variantes de estilo e pode ser personalizado com classes adicionais.

## Propriedades

### `variant`

- **Tipo:** `'primary' | 'secondary' | 'special'`
- **Descrição:** Define a variante de estilo do botão.
- **Padrão:** `'primary'`

### `className`

- **Tipo:** `string`
- **Descrição:** Classes CSS adicionais para estilizar o botão.
- **Opcional**

### `children`

- **Tipo:** `ReactNode`
- **Descrição:** Conteúdo a ser exibido dentro do botão.