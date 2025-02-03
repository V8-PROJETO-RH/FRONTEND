import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "../../components/Input";
import Button from "../../components/Button";
import { VscArrowRight } from "react-icons/vsc";
import AuthService from "../../services/Auth/authservice";
import { FormInputs } from "./types";
import { Link, useNavigate } from 'react-router-dom';

const LoginComponent: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>({
    mode: "onChange",
  }); 

  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await AuthService.login(data);
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col mx-auto overflow-hidden">
      <div className="flex flex-col justify-center h-screen lg:flex-row"> 
        <div className="hidden lg:flex w-[60%]"> 
          <img
            src="../src/assets/login2.png"
            alt="Login"
            className="lg:w-[75%] md:w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center w-full px-8 lg:w-[68%] lg:px-14">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-mont font-bold text-[#0360DC]">LOGIN</h2>
            <p className="text-sm font-mont text-[#475569]">
              Faça login ou registre-se para acessar a plataforma V8 Tech.
            </p>
          </div>

          <form className="mt-10 w-full space-y-4 lg:w-[80%]" onSubmit={handleSubmit(onSubmit)}>
            <div>
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
                <p className="text-red-500 font-bold font-mont mt-1 text-xs w-full">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
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
              />
              {errors.senha && (
                <p className="text-red-500 font-bold font-mont mt-1 text-xs">
                  {errors.senha.message}
                </p>
              )}
            </div>

            {error && <p className="text-red-500 font-bold font-mont">{error}</p>}

            <div className="flex flex-col justify-between gap-2 lg:flex-row lg:items-start">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="text-blue-500 border-gray-300 rounded w-4 h-4 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-[#2B3674]">Mantenha logado</span>
              </label>
              <a href="#" className="text-sm font-bold text-blue-login underline">
                Esqueceu sua senha?
              </a>
            </div>

            <Button
              type="submit"
              variant="secondary"
              className="mt-6 w-full text-white font-mont font-bold flex items-center justify-center gap-2"
            >
              ENTRAR
              <VscArrowRight className="text-white text-2xl" />
            </Button>
          </form>

          <div className="w-full md:w-full lg:w-[78%] flex items-center justify-center mt-4">
            <p className="text-[#475569]">ou</p>
          </div>

          <div className="w-full lg:w-[78%] flex items-center justify-center h-10">
            <div className="w-[50%] md:w-[30%] flex justify-between gap-x-4 lg:gap-x-3">
              <div>
                <img src="../src/assets/linkedin-icon.svg" alt="LinkedIn Logo" />
              </div>
              <div>
                <img src="../src/assets/google-icon.svg" alt="Google Icon" />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-evenly md:mt-4 md:pt-4 w-full lg:w-[78%] md:justify-between px-4 md:px-0 gap-3">
            <div className="flex flex-col md:mb-0">
              <p className="text-[#475569]">Ainda não tem uma conta?</p>
              <Link to="/register" className="text-[#0360DC] font-bold">
                Criar conta
              </Link>
            </div>

            <div className="hidden lg:block border-l border-gray-300 h-10 mx-4"></div>

            <div className="flex items-center">
              <p className="text-[#0360DC] font-bold mr-4 md:mr-10">SIGA NÓS</p>
              <div className="flex flex-row items-center space-x-3 lg:flex-row">
                <a
                  href="https://www.linkedin.com/company/v8tech/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../src/assets/linkedin-icon-gray.svg"
                    alt="LinkedIn"
                    className="lg:w-[100px] h-20  xl:w-7 h-6  "
                  />
                </a>
                <a
                  href="https://www.instagram.com/v8tech.oficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../src/assets/instagram-icon-gray.svg"
                    alt="Instagram"
                   className="lg:w-[100px] h-20  xl:w-7 h-6  "
                  />
                </a>
                <a
                  href="https://www.youtube.com/@GrupoV8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../src/assets/youtube-icon-gray.svg"
                    alt="YouTube"
                    className="lg:w-[100px] h-22  xl:w-7 h-7  "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;