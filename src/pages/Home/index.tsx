import Button from "../../components/Button";


export default function Home() {

    return (
       <>
        <div className="px-[80px] bg-home-background bg-no-repeat h-[68vh] w-full flex items-center justify-between bg-azul-infinito">
            <h1 className="text-white  font-mont text-6xl font-extrabold" >
                VENHA SER SUA <br /> MELHOR VERSÃO <br /> NA V8.
            </h1>
            <div className="flex items-center flex-col gap-2">
                <h1 className="text-2xl text-white font-bold">BUSCAR CARREIRAS NA V8:</h1>
                <input type="text" />
                <h1 className="text-2xl text-white font-bold">OU</h1>
                <Button variant="primary">
                    <p className="font-mont text-white font-bold">VER TODAS AS VAGAS DISPONÍVEIS</p>
                </Button>
            </div>  
        </div>
       </>
    )

} 