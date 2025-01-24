import Button from "../../components/Button";
import CustomInput from "../../components/Input";
import SearchIcon from '../../assets/Search.png';
import { useInView } from 'react-intersection-observer';
import YtIcon from '../../assets/ytIcon.svg'
import LinkedinIcon from '../../assets/linkedinIcon.svg'
import IgIcon from '../../assets/igIcon.svg'
import { IoIosArrowForward } from "react-icons/io";
import ButtonShow1 from '../../assets/buttonShow1.svg'
import ButtonShow2 from '../../assets/buttonShow2.svg'
import LocalIcon from '../../assets/localIcon.svg'
import WorkTipe from '../../assets/companhia1.svg'
import IconContratio from '../../assets/contrato 1.png'
import shareIcon from '../../assets/shareIcon.svg'

export default function Home() {

    const { ref, inView } = useInView({
        threshold: 0.15, // Porcentagem da seção visível para ativar
        triggerOnce: false,
    });


    return (
        <>
            <div className="px-[80px] bg-home-background bg-bottom bg-cover bg-no-repeat h-[80vh] w-full flex items-center justify-between bg-azul-infinito">
                <h1 className="text-white  font-mont text-6xl font-extrabold" >
                    VENHA SER SUA <br /> MELHOR VERSÃO <br /> NA V8.
                </h1>
                <div className="flex items-center flex-col gap-2">
                    <h1 className="text-2xl text-white font-bold">BUSCAR CARREIRAS NA V8:</h1>
                    <CustomInput placeholder="Pesquisar Cargos ou Palavras-chave" inputSize="medium" isSearch={true} icon={<img src={SearchIcon} />} />
                    <h1 className="text-2xl text-white font-bold">OU</h1>
                    <Button variant="primary">
                        <p className="font-mont text-white font-bold">VER TODAS AS VAGAS DISPONÍVEIS</p>
                    </Button>
                </div>
            </div>
            <div ref={ref} className={`bg-home-image bg-no-repeat h-[600px] bg-right mt-[200px] mb-[200px]  transition-all duration-500  ${inView ? 'opacity-100 relative right-0' : 'opacity-0 relative right-[-1000px]'}`}>
                <div className={`w-full h-full bg-gradient-to-r from-white from-55% flex items-center transition-all duration-500  ${inView ? 'relative left-0' : 'relative left-[-2000px]'}`}>
                    <div className="w-2/5 ml-20 flex flex-col gap-10">
                        <h1 className="font-mont text-6xl font-extrabold text-azul-infinito">SOMOS A V8.TECH!</h1>
                        <p className="font-mont font-regular text-lg">Apoiamos os clientes a reinventarem seus negócios por meio da construção e transformação de seu core business,
                            com otimização de operações, TI, transformação digital e aceleração do crescimento, resultado do abrangente
                            portfólio construído ao longo dos anos, originário da combinação estratégica de três grandes empresas: V8 Consulting, Devires & Experior.
                            Oferecemos uma ampla gama de soluções aos nossos clientes, incluindo desenvolvimento e migração de aplicações, projetos DevOps, Big Data e Analytics,
                            além de soluções de Inteligência Artificial. Atualmente a V8.TECH possui mais de 100 clientes entre as 1000 maiores empresas do Brasil, atendendo
                            diversos setores, incluindo Serviços Financeiros, Indústria, Saúde, Seguros, Mídia e Comunicação, Utilities, Educação, Telecom, Varejo,
                            Agronegócio e Transporte. A partir de São Paulo, a V8 atua regionalmente, prestando serviços em outros países da América Latina, como Chile,
                            Argentina, Colômbia, Peru e México. “Somos V8 por acreditar na potência do motor de uma empresa, as pessoas. Sejam elas nossos clientes ou
                            colaboradores.”
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex w-full gap-8">
                <aside className="box-border w-96 h-full px-5">
                    <h1 className="font-mont text-custom-text-select-blue font-bold text-xl">Vagas Disponíveis</h1>
                    <CustomInput className="mb-0 ml-0 w-full" placeholder="Pesquise Cargos ou Palavras-chave" isSearch={true} icon={<img src={SearchIcon} />} ></CustomInput>

                    <div className="w-full h-[1px] bg-medium-gray mt-10 mb-10"></div>
                    <h1 className="font-mont font-bold text-custom-text-select-blue">SOBRE A EMPRESA</h1>
                    <p className="font-mont text-s mt-2">
                        Há 10 anos no mercado, a V8.Tech é uma empresa jovem, movida por tecnologia e inovação, que acelera a transformação digital.
                        Ajudamos nossos clientes a revolucionarem seus negócios por meio da reestruturação e evolução, com foco na otimização de processos,
                        tecnologia da informação, transformação digital e no crescimento em diversos setores. <br /> <br />Atendemos diversos países na América Latina a
                        partir de nosso escritório em São Paulo: Argentina, Colômbia, Peru e México.
                    </p>
                    <div className="flex gap-4 mt-5 mb-5">
                        <a href="https://www.linkedin.com/company/v8tech/posts/?feedView=all" target="_blank">
                            <img src={LinkedinIcon} alt="" />
                        </a>
                        <a href="https://www.instagram.com/v8tech.oficial/" target="_blank">
                            <img src={IgIcon} alt="" />
                        </a>
                        <a href="https://www.youtube.com/@GrupoV8" target="_blank">
                            <img src={YtIcon} alt="" />
                        </a>
                    </div>
                    <h1 className="font-mont text-xs font-bold text-custom-text-select-blue flex items-center gap-2">ACESSE NOSSO SITE <IoIosArrowForward /></h1>
                    <div className="w-full h-[1px] bg-medium-gray mt-10 mb-10"></div>
                </aside>
                <div className="w-full px-8">
                    <div className="flex w-full justify-between" >
                        <h1 className="font-mont text-xs text-custom-text-select-blue font-semibold ">88 CARGOS ENCONTRADOS</h1>
                        <div className="flex gap-2 items-center">
                            <h1 className="font-mont text-xs text-custom-text-select-blue font-semibold ">VISUALIZAR </h1>
                            <img src={ButtonShow1} alt="" />
                            <img src={ButtonShow2} alt="" />
                        </div>
                    </div>


                    <div className="mt-8 grid grid-cols-4 w-full gap-8">
                        <div className="w-[350px] border-[1px] border-solid border-transparent-gray rounded-lg p-4">
                            <h1 className="text-m font-mont text-light-blue font-semibold mb-0">Desenvolvedor(a) Front-End</h1>
                            <h3 className="m-0 font-mont text-gray font-medium">Pleno</h3>
                            <div className="flex w-full gap-4 mt-3 flex-wrap">
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={LocalIcon} alt="" />
                                    <p className="text-m">São Paulo</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/3">
                                    <img src={WorkTipe} alt="" />
                                    <p className="text-m ">Presencial</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={IconContratio} alt="" />
                                    <p className="text-m">CLT</p>
                                </div>
                            </div>
                            <p className="text-sm mt-4">Publicada em: 01/01/2025</p>
                            <div className="mt-6 flex gap-2 items-center w-full">
                                <Button variant="primary" className="px-5 py-[8px] w-[170px]">
                                    <p className="font-mont text-white font-bold text-sm">VER DETALHES</p>
                                </Button>
                                <a href="" className="flex items-center">
                                    <img src={shareIcon} alt="" />
                                    <p className="font-mont font-medium text-sm">Compartilhar</p>
                                </a>
                            </div>
                        </div>
                        <div className="w-[350px] border-[1px] border-solid border-transparent-gray rounded-lg p-4">
                            <h1 className="text-m font-mont text-light-blue font-semibold mb-0">Desenvolvedor(a) Front-End</h1>
                            <h3 className="m-0 font-mont text-gray font-medium">Pleno</h3>
                            <div className="flex w-full gap-4 mt-3 flex-wrap">
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={LocalIcon} alt="" />
                                    <p className="text-m">São Paulo</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/3">
                                    <img src={WorkTipe} alt="" />
                                    <p className="text-m ">Presencial</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={IconContratio} alt="" />
                                    <p className="text-m">CLT</p>
                                </div>
                            </div>
                            <p className="text-sm mt-4">Publicada em: 01/01/2025</p>
                            <div className="mt-6 flex gap-2 items-center w-full">
                                <Button variant="primary" className="px-5 py-[8px] w-[170px]">
                                    <p className="font-mont text-white font-bold text-sm">VER DETALHES</p>
                                </Button>
                                <a href="" className="flex items-center">
                                    <img src={shareIcon} alt="" />
                                    <p className="font-mont font-medium text-sm">Compartilhar</p>
                                </a>
                            </div>
                        </div>
                        <div className="w-[350px] border-[1px] border-solid border-transparent-gray rounded-lg p-4">
                            <h1 className="text-m font-mont text-light-blue font-semibold mb-0">Desenvolvedor(a) Front-End</h1>
                            <h3 className="m-0 font-mont text-gray font-medium">Pleno</h3>
                            <div className="flex w-full gap-4 mt-3 flex-wrap">
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={LocalIcon} alt="" />
                                    <p className="text-m">São Paulo</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/3">
                                    <img src={WorkTipe} alt="" />
                                    <p className="text-m ">Presencial</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={IconContratio} alt="" />
                                    <p className="text-m">CLT</p>
                                </div>
                            </div>
                            <p className="text-sm mt-4">Publicada em: 01/01/2025</p>
                            <div className="mt-6 flex gap-2 items-center w-full">
                                <Button variant="primary" className="px-5 py-[8px] w-[170px]">
                                    <p className="font-mont text-white font-bold text-sm">VER DETALHES</p>
                                </Button>
                                <a href="" className="flex items-center">
                                    <img src={shareIcon} alt="" />
                                    <p className="font-mont font-medium text-sm">Compartilhar</p>
                                </a>
                            </div>
                        </div>
                        <div className="w-[350px] border-[1px] border-solid border-transparent-gray rounded-lg p-4">
                            <h1 className="text-m font-mont text-light-blue font-semibold mb-0">Desenvolvedor(a) Front-End</h1>
                            <h3 className="m-0 font-mont text-gray font-medium">Pleno</h3>
                            <div className="flex w-full gap-4 mt-3 flex-wrap">
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={LocalIcon} alt="" />
                                    <p className="text-m">São Paulo</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/3">
                                    <img src={WorkTipe} alt="" />
                                    <p className="text-m ">Presencial</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={IconContratio} alt="" />
                                    <p className="text-m">CLT</p>
                                </div>
                            </div>
                            <p className="text-sm mt-4">Publicada em: 01/01/2025</p>
                            <div className="mt-6 flex gap-2 items-center w-full">
                                <Button variant="primary" className="px-5 py-[8px] w-[170px]">
                                    <p className="font-mont text-white font-bold text-sm">VER DETALHES</p>
                                </Button>
                                <a href="" className="flex items-center">
                                    <img src={shareIcon} alt="" />
                                    <p className="font-mont font-medium text-sm">Compartilhar</p>
                                </a>
                            </div>
                        </div>
                        <div className="w-[350px] border-[1px] border-solid border-transparent-gray rounded-lg p-4">
                            <h1 className="text-m font-mont text-light-blue font-semibold mb-0">Desenvolvedor(a) Front-End</h1>
                            <h3 className="m-0 font-mont text-gray font-medium">Pleno</h3>
                            <div className="flex w-full gap-4 mt-3 flex-wrap">
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={LocalIcon} alt="" />
                                    <p className="text-m">São Paulo</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/3">
                                    <img src={WorkTipe} alt="" />
                                    <p className="text-m ">Presencial</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={IconContratio} alt="" />
                                    <p className="text-m">CLT</p>
                                </div>
                            </div>
                            <p className="text-sm mt-4">Publicada em: 01/01/2025</p>
                            <div className="mt-6 flex gap-2 items-center w-full">
                                <Button variant="primary" className="px-5 py-[8px] w-[170px]">
                                    <p className="font-mont text-white font-bold text-sm">VER DETALHES</p>
                                </Button>
                                <a href="" className="flex items-center">
                                    <img src={shareIcon} alt="" />
                                    <p className="font-mont font-medium text-sm">Compartilhar</p>
                                </a>
                            </div>
                        </div>
                        <div className="w-[350px] border-[1px] border-solid border-transparent-gray rounded-lg p-4">
                            <h1 className="text-m font-mont text-light-blue font-semibold mb-0">Desenvolvedor(a) Front-End</h1>
                            <h3 className="m-0 font-mont text-gray font-medium">Pleno</h3>
                            <div className="flex w-full gap-4 mt-3 flex-wrap">
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={LocalIcon} alt="" />
                                    <p className="text-m">São Paulo</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/3">
                                    <img src={WorkTipe} alt="" />
                                    <p className="text-m ">Presencial</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={IconContratio} alt="" />
                                    <p className="text-m">CLT</p>
                                </div>
                            </div>
                            <p className="text-sm mt-4">Publicada em: 01/01/2025</p>
                            <div className="mt-6 flex gap-2 items-center w-full">
                                <Button variant="primary" className="px-5 py-[8px] w-[170px]">
                                    <p className="font-mont text-white font-bold text-sm">VER DETALHES</p>
                                </Button>
                                <a href="" className="flex items-center">
                                    <img src={shareIcon} alt="" />
                                    <p className="font-mont font-medium text-sm">Compartilhar</p>
                                </a>
                            </div>
                        </div>
                        <div className="w-[350px] border-[1px] border-solid border-transparent-gray rounded-lg p-4">
                            <h1 className="text-m font-mont text-light-blue font-semibold mb-0">Desenvolvedor(a) Front-End</h1>
                            <h3 className="m-0 font-mont text-gray font-medium">Pleno</h3>
                            <div className="flex w-full gap-4 mt-3 flex-wrap">
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={LocalIcon} alt="" />
                                    <p className="text-m">São Paulo</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/3">
                                    <img src={WorkTipe} alt="" />
                                    <p className="text-m ">Presencial</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={IconContratio} alt="" />
                                    <p className="text-m">CLT</p>
                                </div>
                            </div>
                            <p className="text-sm mt-4">Publicada em: 01/01/2025</p>
                            <div className="mt-6 flex gap-2 items-center w-full">
                                <Button variant="primary" className="px-5 py-[8px] w-[170px]">
                                    <p className="font-mont text-white font-bold text-sm">VER DETALHES</p>
                                </Button>
                                <a href="" className="flex items-center">
                                    <img src={shareIcon} alt="" />
                                    <p className="font-mont font-medium text-sm">Compartilhar</p>
                                </a>
                            </div>
                        </div>
                        <div className="w-[350px] border-[1px] border-solid border-transparent-gray rounded-lg p-4">
                            <h1 className="text-m font-mont text-light-blue font-semibold mb-0">Desenvolvedor(a) Front-End</h1>
                            <h3 className="m-0 font-mont text-gray font-medium">Pleno</h3>
                            <div className="flex w-full gap-4 mt-3 flex-wrap">
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={LocalIcon} alt="" />
                                    <p className="text-m">São Paulo</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/3">
                                    <img src={WorkTipe} alt="" />
                                    <p className="text-m ">Presencial</p>
                                </div>
                                <div className="flex items-center gap-1 w-1/2">
                                    <img src={IconContratio} alt="" />
                                    <p className="text-m">CLT</p>
                                </div>
                            </div>
                            <p className="text-sm mt-4">Publicada em: 01/01/2025</p>
                            <div className="mt-6 flex gap-2 items-center w-full">
                                <Button variant="primary" className="px-5 py-[8px] w-[170px]">
                                    <p className="font-mont text-white font-bold text-sm">VER DETALHES</p>
                                </Button>
                                <a href="" className="flex items-center">
                                    <img src={shareIcon} alt="" />
                                    <p className="font-mont font-medium text-sm">Compartilhar</p>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
} 