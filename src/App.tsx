import { useEffect } from "react";
import { useDispatch } from "react-redux";

import JobCard from "./components/JobCard.component";

import { fetchJobsApi } from "./api/index";

import { loadJobs } from "./redux/jobsReducer";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // fetch api
    const fetchJobs = async () => {
      const apiResponse = await fetchJobsApi();
      // store api result in redux
      dispatch(loadJobs(apiResponse.jdList));
    };
    fetchJobs();
  }, [dispatch]);
  return (
    <>
      <JobCard />
    </>
  );
}

export default App;
