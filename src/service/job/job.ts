export default async function getAllJobs() {
  const urlLocalhost = "http://localhost:8080/"
  const data = await fetch(urlLocalhost);
  console.log(data);
}