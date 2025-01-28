import { JobRequest } from "../../types/job";

export default async function getJobs(page: number = 0, quantity: number = 10) {
  const urlApi = `http://localhost:8080/crud/vagas?page=${page}&size=${quantity}`;
  try {
    const res = await fetch(urlApi);
    const data: JobRequest = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}