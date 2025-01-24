import { useEffect, useState } from "react";
import getAllJobs from "../../service/job/jobs";
import { JobManagement } from "../../types/job";

export default function useManageJobs() {
  const [jobsList, setJobsList] = useState<JobManagement[]>();

  useEffect(() => {
    async function setJobs() {
      const jobsData = await getAllJobs();

      if(jobsData) {
        const listJobs: JobManagement[] = jobsData.map(job => {
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

  return { jobsList };
}