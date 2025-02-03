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
  dataNasc: string;
  confirmarSenha: string;
};

const CadastroComponent: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, watch, setValue, trigger } = useForm<CadastroInputs>({
    mode: "onChange",
  });

  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<CadastroInputs> = async (data) => {
    try {
      if (typeof data.dataNasc === 'string') {
        const [day, month, year] = data.dataNasc.split('/');
        data.dataNasc = new Date(`${year}-${month}-${day}`).toISOString();
      }
      await AuthService.register({
        ...data,
        dataNasc: new Date(data.dataNasc)
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  const senha = watch("senha") || "";

  const handleSenhaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("senha", e.target.value, { shouldValidate: true });
    trigger("confirmarSenha"); // Revalida a confirmação de senha em tempo real
  };

  const formatarCPF = (cpf: string) => {
    const apenasNumeros = cpf.replace(/\D/g, '');
    const cpfFormatado = apenasNumeros
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    return apenasNumeros.length > 11 ? cpfFormatado.substring(0, 14) : cpfFormatado;
  };

  const formatarData = (data: string) => {
    return data
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .substring(0, 10);
  };
  function clearErrors(arg0: string) {
    throw new Error("Function not implemented.");
  }

  return (
    <section className="max-w-full min-h-screen flex flex-col md:flex-row">
      <div className="hidden lg:flex w-[46%] lg:w-[46%] bg-gradient-to-r from-blue-700 to-green-500">
        <img
          src="../src/assets/login2.png"
          alt="V8 Tech Banner"
          className="w-[75%] h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center w-full lg:w-1/2 p-4 lg:p-10">
        <div className="mb-8">
          <h2 className="text-2xl font-mont font-bold text-[#0360DC]">CADASTRO</h2>
          <p className="mt-2 text-sm font-mont text-[#475569]">
            Faça login ou registre-se para acessar a plataforma V8 Tech.
          </p>
        </div>

        <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-4 font-mont md:grid-cols-2">

            <div className="space-y-1">
              <CustomInput
                label="NOME"
                type="text"
                fontSizeLabel="sm"
                heightSize={8}
                placeholder="Inserir seu nome"
                hasError={!!errors.nome}
                {...register("nome", {
                  required: "Nome é obrigatório",
                  pattern: {
                    value: /^[A-Za-zÀ-ÿ\s]+$/,
                    message: "Apenas letras são permitidas"
                  }
                })}
              />
              {errors.nome && (
                <p className="text-red-500 font-bold font-mont text-xs">
                  {errors.nome.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <CustomInput
                label="E-mail"
                type="text"
                heightSize={8}
                fontSizeLabel="sm"
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
                <p className="text-red-500 font-bold font-mont text-xs">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <CustomInput
                label="CPF"
                type="text"
                heightSize={8}
                fontSizeLabel="sm"
                placeholder="000.000.000-00"
                maxLength={14}
                hasError={!!errors.cpf}
                {...register("cpf", {
                  required: "CPF é obrigatório",
                  validate: {
                    formato: (value) => formatarCPF(value).length === 14 || "Formato de CPF inválido",
                    completo: (value) => value.replace(/\D/g, '').length === 11 || "CPF deve ter 11 dígitos",
                  }
                })}
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  const formattedValue = formatarCPF(target.value);
                  setValue("cpf", formattedValue, { shouldValidate: true });
                  target.value = formattedValue;
                  if (formattedValue.match(/^\d{3}\.\d{3}\.\d{2}-\d{2}$/)) {
                    clearErrors("cpf");
                  }
                }}
              />
              {errors.cpf && (
                <p className="text-red-500 font-bold font-mont text-xs">
                  {errors.cpf.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <CustomInput
                label="Data de Nascimento"
                type="text"
                fontSizeLabel="sm"
                heightSize={8}
                placeholder="dd/mm/aaaa"
                hasError={!!errors.dataNasc}
                {...register("dataNasc", {
                  required: "Data de nascimento é obrigatória",
                  validate: {
                    formato: (value) => formatarData(value).length === 10 || "Formato de data inválido",
                    dataValida: (value) => {
                      const [day, month, year] = value.split('/');
                      const date = new Date(`${year}-${month}-${day}`);
                      return !isNaN(date.getTime()) || "Data inválida";
                    }
                  }
                })}
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  const formattedValue = formatarData(target.value);
                  setValue("dataNasc", formattedValue, { shouldValidate: true });
                  target.value = formattedValue;
                }}
              />
              {errors.dataNasc && (
                <p className="text-red-500 font-bold text-xs">
                  {errors.dataNasc.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <CustomInput
                label="Senha"
                type="password"
                heightSize={8}
                fontSizeLabel="sm"
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
                onInput={handleSenhaChange} // Revalida a confirmação de senha ao digitar
              />
              {errors.senha && (
                <p className="text-red-500 font-bold font-mont text-xs">
                  {errors.senha.message}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <CustomInput
                label="Confirmar Senha"
                fontSizeLabel="sm"
                type="password"
                heightSize={8}
                placeholder="Confirme sua senha"
                hasError={!!errors.confirmarSenha}
                {...register("confirmarSenha", {
                  validate: (value) => value === senha || "As senhas não coincidem",
                })}
              />
              {errors.confirmarSenha && (
                <p className="text-red-500 font-bold font-mont text-xs">
                  {errors.confirmarSenha.message}
                </p>
              )}
            </div>

            <div className="md:col-span-2 space-y-4">
              {error && <p className="text-red-500 font-bold font-mont text-center">{error}</p>}

              <div className="flex flex-col items-center">
                <Button
                  type="submit"
                  variant="secondary"
                  className="w-full bg-[#0360DC] text-white font-mont font-bold flex items-center justify-center gap-2"
                >
                  CADASTRAR
                  <VscArrowRight className="text-white text-2xl" />
                </Button>

                <p className="mt-4 text-sm font-mont text-[#475569] text-center">
                  Já possui uma conta?{' '}
                  <Link to="/login" className="text-[#0360DC] font-bold">Entrar</Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CadastroComponent;