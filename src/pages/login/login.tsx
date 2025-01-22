import { useState } from "react";
import CustomInput from "../../components/Input";
import Button from '../../components/Button'
import { VscArrowRight } from "react-icons/vsc";
const LoginComponent = () => {
    const [hide, setHide] = useState(true);

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


                    <form className="mt-10 w-[80%] space-y-4">
                        <CustomInput
                            label="E-mail"
                            type="text"
                            placeholder="Digite seu e-mail"
                            className="w-full"
                        />
                        <CustomInput
                            label="Senha"
                            type="password"
                            placeholder="Digite sua senha"
                            toggleDropdownIcon
                            className="w-full"
                            onClick={() => setHide(!hide)}
                        />
                        <div className="flex justify-between items-center">
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
                    <div className="w-[78%] flex items-center h-10">
                        <p className="mx-auto text-[#475569]">ou</p>
                    </div>
                    <div className="w-[78%] flex items-center justify-center h-10">
                        <div className="w-[30%] flex justify-around">
                            <div><img src="../src/assets/linkedin-icon.svg" alt="LinkedIn Logo" /></div>
                            <div><img src="../src/assets/google-icon.svg" alt="Google Icon" /></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between mt-4 pt-4 w-[78%]">
                        <div className="flex flex-col">
                            <p className="text-[#475569]">Ainda não tem uma conta?</p>
                            <a href="#" className="text-[#0360DC] font-bold">Criar conta</a>
                        </div>

                        <div className="border-l border-gray-300 h-10 mx-4"></div>

                        <div className="flex items-center">
                            <p className="text-[#0360DC] font-bold mr-10">SIGA NÓS</p>
                            <div className="flex space-x-3">
                                <a href="https://www.linkedin.com/company/v8tech/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                                    <img src="../src/assets/linkedin-icon-gray.svg" alt="LinkedIn" className="w-4 h-6" />
                                </a>
                                <a href="https://www.instagram.com/v8tech.oficial/" target="_blank" rel="noopener noreferrer">
                                    <img src="../src/assets/instagram-icon-gray.svg" alt="Instagram" className="w-4 h-6" />
                                </a>
                                <a href="https://www.youtube.com/@GrupoV8" target="_blank" rel="noopener noreferrer">
                                    <img src="../src/assets/youtube-icon-gray.svg" alt="YouTube" className="w-5 h-6" />
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
