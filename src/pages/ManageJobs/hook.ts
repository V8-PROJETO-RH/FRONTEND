import { useEffect, useState } from "react";
import getJobs from "../../service/job/jobs";
import { JobManagement } from "../../types/job";
import { useNavigate } from "react-router-dom";

function getQuantityElementsPerPage() {
  const rootElement = document.documentElement;
  const computedStyle = getComputedStyle(rootElement);
  const fontSize = Number(computedStyle.fontSize.substring(0, 2));
  const textSize = fontSize * 1.25;
  const textPadding = (fontSize * 0.75) * 2;
  const heigthTableCell = textPadding + textSize;

  const { innerHeight } = window;
  const height = innerHeight / 2;

  const quantityElementsRequest = Math.floor(height / heigthTableCell - 1);
  return quantityElementsRequest;
}

export default function useManageJobs() {
  const navigate = useNavigate();

  const [jobsList, setJobsList] = useState<JobManagement[]>();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const quantityElementsPerPage = getQuantityElementsPerPage();

    async function setJobs() {
      const pageRequested = currentStep - 1;
      const jobsData = await getJobs(pageRequested, quantityElementsPerPage);

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
  }, [currentStep]);

  function redirectToCreateJob() {
    return navigate("/adm/manageJob/create");
  }

  return {
    jobsList,
    redirectToCreateJob,
    stepper: {
      currentStep,
      setCurrentStep,
    },
  };
}