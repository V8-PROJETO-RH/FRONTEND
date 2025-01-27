import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import CustomInput from "../../components/Input";
import useManageJobs from "./hook";

const SvgEmptyIcon: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="51"
    height="51"
    fill="none"
    viewBox="0 0 51 51"
  >
    <path
      fill="#000"
      d="m49.807 43.857-9.738-9.737a2.34 2.34 0 0 0-1.66-.683h-1.592a20.2 20.2 0 0 0 4.297-12.501C41.115 9.714 32.023.622 20.802.622 9.579.622.487 9.714.487 20.936S9.579 41.25 20.8 41.25c4.717 0 9.053-1.602 12.5-4.298v1.592c0 .625.245 1.221.684 1.66l9.737 9.738a2.334 2.334 0 0 0 3.31 0l2.765-2.764a2.355 2.355 0 0 0 .01-3.32M20.8 33.437C13.896 33.437 8.3 27.85 8.3 20.936c0-6.905 5.586-12.501 12.5-12.501 6.905 0 12.501 5.586 12.501 12.5 0 6.905-5.586 12.502-12.5 12.502"
    ></path>
    <path
      fill="#000"
      d="M20.87 3C11.55 3 4 10.55 4 19.87s7.55 16.87 16.87 16.87 16.87-7.55 16.87-16.87S30.19 3 20.87 3m0 30.475c-7.503 0-13.605-6.102-13.605-13.605S13.367 6.265 20.87 6.265s13.605 6.102 13.605 13.605-6.102 13.605-13.605 13.605m-5.442-14.693a2.174 2.174 0 0 0 2.177-2.177 2.174 2.174 0 0 0-2.177-2.177 2.174 2.174 0 0 0-2.177 2.177c0 1.204.973 2.177 2.177 2.177m10.884-4.354a2.174 2.174 0 0 0-2.177 2.177c0 1.204.973 2.177 2.177 2.177a2.174 2.174 0 0 0 2.177-2.177 2.174 2.174 0 0 0-2.177-2.177m-5.442 8.707a9.17 9.17 0 0 0-7.06 3.306 1.63 1.63 0 0 0 .21 2.3 1.637 1.637 0 0 0 2.3-.212 5.918 5.918 0 0 1 9.1 0c.552.66 1.572.81 2.3.211a1.637 1.637 0 0 0 .21-2.299 9.17 9.17 0 0 0-7.06-3.306"
    ></path>
  </svg>
);

function showEmptyState() {
  return(
    <tr>
      <td colSpan={6}>
        <div className="grid justify-center gap-6 w-full max-w-6xl">
          <div className="flex items-center p-4">
            <div className="flex flex-shrink-0 items-center justify-center bg-green-200 h-16 w-16 rounded">
              <SvgEmptyIcon />
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
  const { jobsList, redirectToCreateJob } = useManageJobs();

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
    <div className="py-12 px-8">
      <div className="border-b border-solid border-b-verde-energia">
        <h1 className="text-2xl font-semibold">Vagas</h1>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <CustomInput id="filter" placeholder="Buscar vagas" label="Filtro:" />

        <Button variant="primary" className="h-min text-sm font-medium mr-3" onClick={redirectToCreateJob}>+ Nova vaga</Button>
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