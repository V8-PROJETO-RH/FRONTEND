import { Link } from "react-router-dom";
import Button from "../../components/Button";
import CustomInput from "../../components/Input";
import useManageJobs from "./hook";

export default function ManageJobs() {
  const { jobsList } = useManageJobs();

  function showJobs() {
    return jobsList!.map(job => {
      return (
        <tr key={job.id} className="bg-white border-b border-b-medium-gray/25">
          <td className="px-3.5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{job.id}</td>
          <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">{job.nome}</td>
          <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">{job.quantidade}</td>
          <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">{job.responsavel}</td>
          <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">{job.status}</td>
          <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap"><Link className="hover:text-azul-tecnologia" to="/adm/manageJob/edit">Editar</Link></td>
        </tr>
      );
    });
  }

  function showEmptyState() {
    return(
      <tr>
        <td colSpan={6}>
          <div className="grid justify-center gap-6 w-full max-w-6xl">
            <div className="flex items-center p-4 rounded">
                <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
                    <svg className="w-6 h-6 fill-current text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <div className="flex-grow flex flex-col ml-4">
                    <span className="text-xl font-bold">Aviso!</span>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-500">Nenhuma vaga encontrada</span>
                    </div>
                </div>
            </div>
          </div>
        </td>
      </tr>
    )
  }

  function renderTableItems() {
    return jobsList ? showJobs() : showEmptyState();
  }

  return(
    <div className="py-12 px-8">
      <div className="border-b border-solid border-b-verde-energia">
        <h1 className="text-2xl font-semibold">Vagas</h1>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <CustomInput placeholder="Buscar vagas" />

        <Button variant="primary" className="h-min text-sm font-medium mr-3">+ Nova vaga</Button>
      </div>

      <div className="flex flex-col mx-3">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                  <table className="min-w-full">
                      <thead className="border-b">
                          <tr>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-3.5 text-left">ID</th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-3.5 text-left">Nome</th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-3.5 text-left">Quantidade</th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-3.5 text-left">Responsável</th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-3.5 text-left">Estado</th>
                              <th scope="col" className="text-sm font-medium text-gray-900 px-3 py-3.5 text-left">Ações</th>
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
    </div>
  );
}