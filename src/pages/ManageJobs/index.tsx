import { Link } from "react-router-dom";
import Button from "../../components/Button";
import CustomInput from "../../components/Input";
import useManageJobs from "./hook";

export default function ManageJobs() {
  useManageJobs();

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
                          <tr className="bg-white border-b border-b-medium-gray/25">
                              <td className="px-3.5 py-3 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                              <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">analista de infrastrutura senior</td>
                              <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">3</td>
                              <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">anna.silva@v8.tech</td>
                              <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap">Congelada</td>
                              <td className="text-sm text-gray-900 font-light px-3.5 py-3 whitespace-nowrap"><Link className="hover:text-azul-tecnologia" to="/adm/manageJob/edit">Editar</Link></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}