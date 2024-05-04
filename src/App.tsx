import { useEffect } from "react";
import JobCard from "./components/JobCard.component";
import { fetchJobsApi } from "./api/index";

function App() {
  useEffect(() => {
    const fetchJobs = async () => {
      const apiResponse = await fetchJobsApi();
      console.log(apiResponse);
    };
    fetchJobs();
  }, []);
  return (
    <>
      <JobCard />
    </>
  );
}

export default App;
