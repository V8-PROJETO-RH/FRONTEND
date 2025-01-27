import { Job } from "../../types/job";

export default async function getAllJobs() {
  const urlApi = "https://mocki.io/v1/964b6ae0-4b59-40e0-845b-661efe79f487"
  try {
    const res = await fetch(urlApi);
    const data: Job[] = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}