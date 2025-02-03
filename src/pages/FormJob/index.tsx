import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";

export default function FormJob() {
  return(
    <div className="pt-12 px-8 lg:text-sm 2xl:text-base">
      <div className="border-b border-solid border-b-verde-energia">
        <h1 className="text-2xl font-semibold">Criar vaga</h1>
      </div>

      <div className="flex gap-12 px-10 pt-5">
        <div className="w-1/3 flex flex-col gap-4">
          <Input className="[&>label]:mb-1" label="Nome:" placeholder="Digite o nome..." />

          <Input className="[&>label]:mb-1" label="Descrição:" placeholder="Digite a descrição..." />

          <Input className="[&>label]:mb-1" label="Atribuições:" placeholder="Digite as atribuições..." />

          <Input className="[&>label]:mb-1" label="Requisitos:" placeholder="Digite os requisitos..." />
        </div>

        <div className="w-1/3 flex flex-col gap-4">
          <Input className="[&>label]:mb-1" label="Salario:" placeholder="Digite o salario..." />

          <Input className="[&>label]:mb-1" label="Beneficios:" placeholder="Digite os beneficios..." />

          <div className="mb-4">
            <span className="font-semibold mb-0.5 flex">Contratação:</span>
            <div className="flex gap-11 py-2">
              <div className="flex">
                <Checkbox id="contract-clt" value="contract-clt" name="contracts" type="radio" />
                <span>CLT</span>
              </div>

              <div className="flex">
                <Checkbox id="contract-pj" value="contract-pj" name="contracts" type="radio" />
                <span>PJ</span>
              </div>
            </div>
          </div>

          <div>
            <span className="font-semibold mb-0.5 flex">Modelo:</span>
            <div className="w-full flex gap-4">
              <div className="flex items-center">
                <Checkbox id="model-hibrid" value="model-hibrid" name="models" type="radio" />
                <label htmlFor="model-hibrid">Hibrido</label>
              </div>

              <div className="flex items-center">
                <Checkbox id="model-on-site" value="model-on-site" name="models" type="radio" />
                <label htmlFor="model-on-site">Presencial</label>
              </div>

              <div className="flex items-center">
                <Checkbox id="model-home" value="model-home" name="models" type="radio" />
                <label htmlFor="model-home">Home Office</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}