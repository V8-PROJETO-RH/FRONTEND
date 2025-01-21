# **Projeto RH da V8**

Este é o repositório para o **Projeto RH da V8**, desenvolvido com **React** e tecnologias modernas para criar uma aplicação rápida, funcional e estilosa.

> ⚠ **O projeto ainda está em desenvolvimento.**

---

## **Tecnologias Utilizadas**

- **TypeScript**
- **Vite**
- **React**
- **Tailwind CSS**
- **React Router DOM**
- **React Hook Form**
- **Yup**
- **ApexCharts**
- **React Icons**
- **Auth0**
- **Jest**

---

## **Configuração Rápida**

Siga os passos abaixo para clonar, instalar e executar o projeto localmente:

### **1. Opções para Clonar o Repositório**

#### **1.1 Usando HTTPS**
1. Acesse o repositório no GitHub e copie o link HTTPS.
   - Exemplo: `https://github.com/V8-PROJETO-RH/FRONTEND.git`.
2. No terminal, execute o comando:
   ```bash
   git clone https://github.com/V8-PROJETO-RH/FRONTEND.git

#### 1.2 Usando SSH
1. Certifique-se de que sua chave SSH está configurada no GitHub.
2. Copie o link SSH do repositório:
  - Exemplo: `git@github.com:V8-PROJETO-RH/FRONTEND.git`.
3. No terminal, execute o comando:
git clone git@github.com:V8-PROJETO-RH/FRONTEND.git'

#### 1.3 Usando o GitHub CLI
1. Certifique-se de que o GitHub CLI está instalado e autenticado no seu ambiente.
2. No terminal, execute o comando:
gh repo clone V8-PROJETO-RH/FRONTEND

### **2. Instale as Dependências**
1. No terminal execute o comando:
  - Exemplo: `npm install`

### **3. Execute o projeto**
1. No terminal execute o comando:
  - Exemplo: `npm run dev`
2. Depois de iniciado, abra o navegador e acesse o endereço:
  - Exemplo: `http://localhost:5173`


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


