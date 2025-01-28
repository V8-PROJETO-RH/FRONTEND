import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "../../components/Input";
import Button from "../../components/Button";
import { VscArrowRight } from "react-icons/vsc";
import AuthService from "../../services/Auth/authservice";
import { FormInputs } from "../login/types";
import { Link } from "react-router-dom";

type CadastroInputs = FormInputs & {
  nome: string;
  cpf: string;
  dataNascimento: string;
  confirmarSenha: string;
};

const CadastroComponent: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch, setValue, clearErrors } = useForm<CadastroInputs>({
    mode: "onChange", 
  });

  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<CadastroInputs> = async (data) => {
    try {
      await AuthService.register(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const senha = watch("senha");

  const formatarCPF = (cpf: string) => {
    const apenasNumeros = cpf.replace(/\D/g, "");
    return apenasNumeros
      .substring(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{2})$/, "$1-$2");
  };

  const formatarData = (data: string) => {
    const apenasNumeros = data.replace(/\D/g, "");
    return apenasNumeros
      .substring(0, 8)
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2");
  };

  return (
    <section className="max-w-full min-h-screen flex">
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-blue-700 to-green-500">
        <img
          src="../src/assets/login2.png"
          alt="V8 Tech Banner"
          className="w-[72%] h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center w-full md:w-1/2 pr-14">
        <div>
          <h2 className="text-2xl font-mont font-bold text-[#0360DC]">CADASTRO</h2>
          <p className="mt-2 text-sm font-mont text-[#475569]">
            Faça login ou registre-se para acessar a plataforma V8 Tech.
          </p>
        </div>

        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <CustomInput
                label="Nome"
                type="text"
                placeholder="Inserir seu nome"
                hasError={!!errors.nome}
                {...register("nome", { required: "Nome é obrigatório" })}
              />
              {errors.nome && (
                <p className="text-red-500 font-bold font-mont mt-1 text-xs">
                  {errors.nome.message}
                </p>
              )}
            </div>

            <div>
              <CustomInput
                label="E-mail"
                type="text"
                placeholder="Digite seu e-mail"
                hasError={!!errors.email}
                {...register("email", {
                  required: "E-mail é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Formato de e-mail inválido",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 font-bold font-mont mt-1 text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="cpf" className="block text-sm font-mont">CPF</label>
              <input
                type="text"
                id="cpf"
                placeholder="000.000.000-00"
                maxLength={14}
                {...register("cpf", {
                  required: "CPF é obrigatório",
                  validate: {
                    pattern: (value) => /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value) || "Formato de CPF inválido",
                  },
                  onChange: (e) => {
                    e.target.value = formatarCPF(e.target.value);
                    setValue("cpf", e.target.value);
                    if (e.target.value.match(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)) {
                      clearErrors("cpf");
                    }
                  }
                })}
                className={`mt-1 p-2 border ${errors.cpf ? "border-red-500" : "border-gray-300"} rounded-lg w-full outline-none`}
              />
              {errors.cpf && (
                <p className="text-red-500 font-bold font-mont mt-1 text-xs">
                  {errors.cpf.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="dataNascimento" className="block text-sm font-mont">Data de Nascimento</label>
              <input
                type="text"
                id="dataNascimento"
                placeholder="DD/MM/AAAA"
                maxLength={10}
                {...register("dataNascimento", {
                  required: "Data de nascimento é obrigatória",
                  validate: {
                    pattern: (value) => /^\d{2}\/\d{2}\/\d{4}$/.test(value) || "Formato de data inválido",
                  },
                  onChange: (e) => {
                    e.target.value = formatarData(e.target.value);
                    setValue("dataNascimento", e.target.value);
                  },
                })}
                className={`mt-1 p-2 border ${errors.dataNascimento ? "border-red-500" : "border-gray-300"} rounded-lg w-full outline-none`}
              />
              {errors.dataNascimento && (
                <p className="text-red-500 font-bold font-mont mt-1 text-xs">
                  {errors.dataNascimento.message}
                </p>
              )}
            </div>

            <div>
              <CustomInput
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                hasError={!!errors.senha}
                {...register("senha", {
                  required: "Senha é obrigatória",
                  minLength: { value: 8, message: "Senha deve ter no mínimo 8 caracteres" },
                  validate: {
                    hasNumber: (value) => /\d/.test(value) || "Senha deve conter pelo menos um número",
                    hasSpecialChar: (value) => /[!@#$%^&*]/.test(value) || "Senha deve conter pelo menos um caractere especial",
                  },
                })}
              />
              {errors.senha && (
                <p className="text-red-500 font-bold font-mont mt-1 text-xs">
                  {errors.senha.message}
                </p>
              )}
            </div>

            <div>
              <CustomInput
                label="Confirmar Senha"
                type="password"
                placeholder="Confirme sua senha"
                hasError={!!errors.confirmarSenha}
                {...register("confirmarSenha", {
                  validate: value => value === senha || "As senhas não coincidem",
                })}
              />
              {errors.confirmarSenha && (
                <p className="text-red-500 font-bold font-mont mt-1 text-xs">
                  {errors.confirmarSenha.message}
                </p>
              )}
            </div>
          </div>

          {error && <p className="text-red-500 font-bold font-mont mt-4 text-center">{error}</p>}

          <div className="flex flex-col items-center mt-8">
            <Button
              type="submit"
              variant="secondary"
              className="w-full md:w-[72%] bg-[#0360DC] text-white font-mont font-bold flex items-center justify-center gap-2"
            >
              CADASTRAR
              <VscArrowRight className="text-white text-2xl" />
            </Button>

            <p className="mt-4 text-sm font-mont text-[#475569]">
              Já possui uma conta? <Link to="/login" className="text-[#0360DC] font-bold">Entrar</Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CadastroComponent;