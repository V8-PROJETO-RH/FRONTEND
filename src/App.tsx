import Input from "./components/Input";
import SearchInput from "./components/InputSearch";

const App: React.FC = () => {
  const suggestions = [
    "Desenvolvedor(a) Front-end",
    "Desenvolvedor(a) React",
    "Desenvolvedor(a) Angular",
    "Desenvolvedor(a) Back-end",
    "Engenheiro(a) de Software",
  ];
  
  return (
    <div className="p-4">
      <Input 
        label="E-mail" 
        placeholder="Digite seu e-mail" 
        type="email" 
        inputSize="medium"
      />
      <Input
        label="Senha"
        placeholder="Digite sua senha"
        type="password"
        inputSize="medium"
      />

      <SearchInput
        label="Pesquisar"
        suggestions={suggestions}
      />
    </div>
  );
};

export default App;