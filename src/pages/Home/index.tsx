import Button from "../../components/Button";
import CustomInput from "../../components/Input";
import SearchIcon from '../../assets/Search.png';
import { useInView } from 'react-intersection-observer';




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
            <div ref={ref} className={`bg-home-image bg-no-repeat h-[600px] bg-right mt-[200px]  transition-all duration-500  ${inView ? 'opacity-100 relative right-0' : 'opacity-0 relative right-[-1000px]'}`}>
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
        </>
    )

} 