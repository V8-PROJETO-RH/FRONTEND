import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import CustomInput from "../../components/Input";
import Button from "../../components/Button";
import { VscArrowRight } from "react-icons/vsc";
import AuthService from "../../services/Auth/authservice";

interface FormInputs {
  email: string;
  senha: string;
}

const LoginComponent: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, trigger } = useForm<FormInputs>({
    mode: "onChange", // Executa validação enquanto o usuário digita
  });

  const [error, setError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      await AuthService.login(data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <section className="max-w-full min-h-screen flex flex-col mx-auto overflow-hidden">
      <div className="flex flex-row justify-center h-screen">
        <div className="hidden md:flex w-1/2">
          <img
            src="../src/assets/login2.png"
            alt="Login"
            className="w-[72%] h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center w-full md:w-1/2 px-14">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-mont font-bold text-[#0360DC]">LOGIN</h2>
            <p className="text-sm font-mont text-[#475569]">
              Faça login ou registre-se para acessar a plataforma V8 Tech.
            </p>
          </div>

          <form className="mt-10 w-[80%] space-y-4" onSubmit={handleSubmit(onSubmit)}>
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
              <CustomInput
                label="Senha"
                type="password"
                placeholder="Digite sua senha"
                hasError={!!errors.senha}
                {...register("senha", {
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 8,
                    message: "Senha deve ter no mínimo 8 caracteres",
                  },
                  validate: {
                    hasNumber: (value) =>
                      /\d/.test(value) || "Senha deve conter pelo menos um número",
                    hasSpecialChar: (value) =>
                      /[!@#$%^&*]/.test(value) || "Senha deve conter pelo menos um caractere especial",
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

            <Button
              type="submit"
              variant="secondary"
              className="mt-6 w-full text-white font-mont font-bold flex items-center justify-center gap-2"
            >
              ENTRAR
              <VscArrowRight className="text-white text-2xl" />
            </Button>
          </form>

          <div className="w-[78%] flex items-center h-10">
            <p className="mx-auto text-[#475569]">ou</p>
          </div>
          <div className="w-[78%] flex items-center justify-center h-10">
            <div className="w-[30%] flex justify-around">
              <div>
                <img src="../src/assets/linkedin-icon.svg" alt="LinkedIn Logo" />
              </div>
              <div>
                <img src="../src/assets/google-icon.svg" alt="Google Icon" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 w-[78%]">
            <div className="flex flex-col">
              <p className="text-[#475569]">Ainda não tem uma conta?</p>
              <a href="#" className="text-[#0360DC] font-bold">
                Criar conta
              </a>
            </div>

            <div className="border-l border-gray-300 h-10 mx-4"></div>

            <div className="flex items-center">
              <p className="text-[#0360DC] font-bold mr-10">SIGA NÓS</p>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/company/v8tech/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="../src/assets/linkedin-icon-gray.svg"
                    alt="LinkedIn"
                    className="w-4 h-6"
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
                    className="w-4 h-6"
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
                    className="w-5 h-6"
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