import { Link } from "react-router-dom";
import Button from "../../components/Button";
import CustomInput from "../../components/Input";
import useManageJobs from "./hook";
import emptyState from "../../assets/EmptyState.svg";
import Stepper from "../../components/Stepper";

function showEmptyState() {
  return(
    <tr>
      <td colSpan={6}>
        <div className="grid justify-center gap-6 w-full max-w-6xl">
          <div className="flex items-center p-4">
            <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
              <img src={emptyState} />
            </div>
            <div className="flex-grow flex flex-col ml-2">
              <span className="text-xl font-bold">Nenhuma vaga encontrada!</span>
            </div>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default function ManageJobs() {
  const { jobsList, redirectToCreateJob, stepper } = useManageJobs();

  function showJobs() {
    return jobsList!.map(job => {
      return (
        <tr key={job.id} className="bg-white border-b border-b-medium-gray/25">
          <td className="px-3.5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{job.id}</td>
          <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">{job.nome}</td>
          <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">{job.quantidade}</td>
          <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">{job.responsavel}</td>
          <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">{job.status}</td>
          <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap"><Link className="text-azul-tecnologia" to={`/adm/manageJob/edit/${job.id}`}>Editar</Link></td>
        </tr>
      );
    });
  }

  function renderTableItems() {
    return jobsList ? showJobs() : showEmptyState();
  }

  return(
    <div className="pt-12 px-8">
      <div className="border-b border-solid border-b-verde-energia">
        <h1 className="text-2xl font-semibold">Vagas</h1>
      </div>

      <div className="mt-6 flex justify-between items-end">
        <CustomInput id="filter" placeholder="Buscar vagas" label="Filtro:" className="!w-2/4" />

        <Button variant="primary" className="h-min text-sm font-medium mr-3 mb-4" onClick={redirectToCreateJob}>+ Nova vaga</Button>
      </div>

      <div className="flex flex-col mx-3 mb-3 h-[50vh]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b border-b-verde-energia">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-azul-infinito px-3 py-3.5 text-left">ID</th>
                    <th scope="col" className="text-sm font-medium text-azul-infinito px-3 py-3.5 text-left">Nome</th>
                    <th scope="col" className="text-sm font-medium text-azul-infinito px-3 py-3.5 text-left">Quantidade</th>
                    <th scope="col" className="text-sm font-medium text-azul-infinito px-3 py-3.5 text-left">Responsável</th>
                    <th scope="col" className="text-sm font-medium text-azul-infinito px-3 py-3.5 text-left">Estado</th>
                    <th scope="col" className="text-sm font-medium text-azul-infinito px-3 py-3.5 text-left">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableItems()}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Stepper currentStep={stepper.currentStep} qtdSteps={stepper.quantityPages} setCurrentStep={stepper.setCurrentStep} />
      </div>
    </div>
  );
}