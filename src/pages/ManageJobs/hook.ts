import { useEffect, useState } from "react";
import getAllJobs from "../../service/job/job";

export default function useManageJobs() {
  const [jobsList, setJobsList] = useState([]);

  useEffect(() => {
    getAllJobs();
  }, [])
}