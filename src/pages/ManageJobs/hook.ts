import { useEffect, useState } from "react";
import getAllJobs from "../../service/job/jobs";
import { JobManagement } from "../../types/job";
import { useNavigate } from "react-router-dom";

export default function useManageJobs() {
  const navigate = useNavigate();

  const [jobsList, setJobsList] = useState<JobManagement[]>();

  useEffect(() => {
    const rootElement = document.documentElement;
    const computedStyle = getComputedStyle(rootElement);
    const fontSize = Number(computedStyle.fontSize.substring(0, 2));
    const textSize = fontSize * 1.25;
    const textPadding = (fontSize * 0.75) * 2;
    const heigthTableCell = textPadding + textSize;

    const { innerHeight } = window;
    const height = innerHeight / 2;

    const quantityElementsRequest = Math.floor(height / heigthTableCell - 1);

    async function setJobs() {
      const jobsData = await getAllJobs(0, quantityElementsRequest);

      if(jobsData) {
        const listJobs: JobManagement[] = jobsData.vagas.map(job => {
          return {
            id: job.id,
            nome: job.nome,
            quantidade: job.quantidade,
            responsavel: job.responsavel,
            status: job.status
          }
        })

        setJobsList(listJobs);
      }

    }

    setJobs();
  }, []);

  function redirectToCreateJob() {
    return navigate("/adm/manageJob/create");
  }

  return { jobsList, redirectToCreateJob };
}