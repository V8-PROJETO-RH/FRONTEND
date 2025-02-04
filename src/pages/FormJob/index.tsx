import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import CustomInput from "../../components/Input";
import useFormJob from "./hook";

export default function FormJob() {
  const { register, errors, handleSubmit, onSubmit } = useFormJob();

  const messageRequired = "Campo Obrigatorio!";

  return(
    <div className="h-screen flex flex-col pt-12 px-8 lg:text-sm 2xl:text-base">
      <div className="border-b border-solid border-b-verde-energia">
        <h1 className="text-2xl font-semibold">Criar vaga</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="my-auto">

        <div className="flex gap-12 px-10 2xl:px-5">
          <div className="w-1/3 flex flex-col gap-6 2xl:gap-12">
            <div>
              <CustomInput {...register("name", { required: messageRequired })} hasError={!!errors.name} type="text" className="[&>label]:mb-1 !mb-0" label="Nome:" placeholder="Digite o nome..." />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>

            <div>
              <CustomInput {...register("description", { required: messageRequired })} hasError={!!errors.description} type="text" className="[&>label]:mb-1 !mb-0" label="Descrição:" placeholder="Digite a descrição..." />
              {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>

            <div>
              <CustomInput {...register("assignments", { required: messageRequired })} hasError={!!errors.assignments} type="text" className="[&>label]:mb-1 !mb-0" label="Atribuições:" placeholder="Digite as atribuições..." />
              {errors.assignments && <p className="text-red-500">{errors.assignments.message}</p>}
            </div>

            <div>
              <CustomInput {...register("requisites", { required: messageRequired })} hasError={!!errors.requisites} type="text" className="[&>label]:mb-1 !mb-0" label="Requisitos:" placeholder="Digite os requisitos..." />
              {errors.requisites && <p className="text-red-500">{errors.requisites.message}</p>}
            </div>
          </div>

          {/* <div className="w-1/3 flex flex-col gap-6 2xl:gap-12">
            <div>
              <CustomInput {...register("salary", { required: messageRequired })} hasError={!!errors.salary} className="[&>label]:mb-1 !mb-0" label="Salario:" placeholder="Digite o salario..." />
              {errors.salary && (<p className="text-red-500">{errors.salary.message}</p>)}
            </div>

            <div>
              <CustomInput {...register("benefits", { required: messageRequired })} hasError={!!errors.benefits} className="[&>label]:mb-1 !mb-0" label="Beneficios:" placeholder="Digite os beneficios..." />
              {errors.benefits && (<p className="text-red-500">{errors.benefits.message}</p>)}
            </div>

            <div className="mb-4">
              <span className="font-semibold mb-0.5 flex">Contratação:</span>
              <div className="flex gap-11 py-2">
                <div className="flex">
                  <Checkbox id="contract-clt" value="contract-clt" name="contracts" type="radio" />
                  <label htmlFor="contract-clt" className="cursor-pointer">CLT</label>
                </div>

                <div className="flex">
                  <Checkbox id="contract-pj" value="contract-pj" name="contracts" type="radio" />
                  <label htmlFor="contract-pj" className="cursor-pointer">PJ</label>
                </div>
              </div>
            </div>

            <div>
              <span className="font-semibold mb-0.5 flex">Modelo:</span>
              <div className="w-full flex gap-4">
                <div className="flex items-center">
                  <Checkbox checked={true} id="model-hibrid" value="model-hibrid" name="models" type="radio" />
                  <label htmlFor="model-hibrid" className="cursor-pointer">Hibrido</label>
                </div>

                <div className="flex items-center">
                  <Checkbox id="model-on-site" value="model-on-site" name="models" type="radio" />
                  <label htmlFor="model-on-site" className="cursor-pointer">Presencial</label>
                </div>

                <div className="flex items-center">
                  <Checkbox id="model-home" value="model-home" name="models" type="radio" />
                  <label htmlFor="model-home" className="cursor-pointer">Home Office</label>
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/3 flex flex-col gap-6 2xl:gap-12">
            <div>
              <CustomInput {...register("quantity", { required: messageRequired })} hasError={!!errors.quantity} className="[&>label]:mb-1 !mb-0" label="Quantidade:" placeholder="Digite a quantidade..." />
              {errors.quantity && (<p className="text-red-500">{errors.quantity.message}</p>)}
            </div>

            <div>
              <CustomInput {...register("responsible", { required: messageRequired })} hasError={!!errors.responsible} className="[&>label]:mb-1 !mb-0" label="Responsavel:" placeholder="Digite o responsavel..." />
              {errors.responsible && (<p className="text-red-500">{errors.responsible.message}</p>)}
            </div>

            <div>
              <span className="font-semibold mb-2 flex">Status:</span>
              <div className="w-full flex flex-col 2xl:flex-row gap-4">
                <div className="flex items-center">
                  <Checkbox id="status-progress" value="status-progress" name="status" type="radio" />
                  <label htmlFor="status-progress" className="cursor-pointer">Andamento</label>
                </div>

                <div className="flex items-center">
                  <Checkbox id="status-freeze" value="status-freeze" name="status" type="radio" />
                  <label htmlFor="status-freeze" className="cursor-pointer">Congelada</label>
                </div>

                <div className="flex items-center">
                  <Checkbox id="status-completed" value="status-completed" name="status" type="radio" />
                  <label htmlFor="status-completed" className="cursor-pointer">Concluida</label>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        <div className="flex justify-center gap-7 mt-7">
          <Button variant="secondary" className="!bg-transparent-gray">Fechar</Button>
          <Button variant="primary" type="submit" onClick={() => console.log(errors)}>Salvar</Button>
        </div>
      </form>

    </div>
  );
};