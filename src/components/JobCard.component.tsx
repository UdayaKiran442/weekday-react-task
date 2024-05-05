import { useSelector } from "react-redux";

import JobHeader from "./JobHeader.component";
import JobDetails from "./JobDetails.component";
import JobSalary from "./JobSalary.component";
import JobDescription from "./JobDescription.component";
import JobExperience from "./JobExperience.component";
import Button from "./Button.component";
import FilterInput from "./FilterInput.component";

import sand_clock from "../assets/sand_clock.jpeg";

import styles from "../styles/JobCard.module.css";

import { selectJobs } from "../redux/jobsReducer";
import { useLayoutEffect, useState } from "react";

// define type of each Job
interface Job {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number;
  salaryCurrencyCode: string;
  location: string;
  minExp: string;
  maxExp: string;
  jobRole: string;
  companyName: string;
  logoUrl: string;
}

const JobCard = () => {
  // fetch jobs from redux
  const jobs = useSelector(selectJobs);

  // values to be selected to filter
  const [roles, setRoles] = useState<string[]>();
  const [experiences, setExperiences] = useState<string[]>([]);

  // array of values to be filtered on
  const [filteredRoles, setFilteredRoles] = useState<string[]>([]);
  const [filteredExperiences, setFilteredExperiences] = useState<string[]>([]);

  // final result to be displayed
  const [data, setData] = useState<Array<Job>>([]);

  useLayoutEffect(() => {
    // Extracting unique roles from jobs array
    const rolesSet = new Set<string>();
    jobs.forEach((job: Job) => {
      rolesSet.add(job.jobRole);
    });
    const uniqueRolesArray = Array.from(rolesSet);
    setRoles(uniqueRolesArray);

    // Extracting unique experiences form jobs array
    const experiencesSet = new Set<string>();
    jobs.forEach((job: Job) => {
      {
        job.minExp && experiencesSet.add(job.minExp);
      }
    });
    const uniqueExperiencesArray = Array.from(experiencesSet);
    setExperiences(uniqueExperiencesArray);

    // initialising filteredData array to jobs
    let filteredData: Array<Job> = jobs;

    // filter data based on job roles
    if (filteredRoles.length > 0) {
      filteredData = filteredData.filter((job: Job) =>
        filteredRoles.includes(job.jobRole)
      );
    }

    // filter data based on job experience
    if (filteredExperiences.length > 0) {
      filteredData = filteredData.filter((job: Job) =>
        filteredExperiences.some((exp) => parseInt(job.minExp) >= parseInt(exp))
      );
    }

    // set the filtered data
    setData(filteredData);
  }, [jobs, filteredRoles, filteredExperiences]);

  return (
    <>
      <div>
        {/* select options */}
        <FilterInput
          placeholder="Roles"
          names={roles}
          category={filteredRoles}
          setCategory={setFilteredRoles}
        />
        <FilterInput
          placeholder="Minimum Experience"
          names={experiences}
          category={filteredExperiences}
          setCategory={setFilteredExperiences}
        />
      </div>
      {/* job cards */}
      <div className={styles.jobsCard}>
        {data.map((job: Job) => (
          <div key={job.jdUid} className={styles.jobCard}>
            <div>
              {/* job header */}
              <JobHeader image={sand_clock} text="Posted a day ago" />
            </div>
            <div>
              {/* company details */}
              <JobDetails
                logo={job.logoUrl}
                company={job.companyName}
                location={job.location}
                role={job.jobRole}
              />
            </div>
            <div>
              {/* salary */}
              <JobSalary
                minJdSalary={job.minJdSalary}
                maxJdSalary={job.maxJdSalary}
                salaryCurrencyCode={job.salaryCurrencyCode}
              />
            </div>
            <div>
              {/* about company */}
              <JobDescription description={job.jobDetailsFromCompany} />
            </div>
            <div>
              {/* experience */}
              <JobExperience minExp={job.minExp} maxExp={job.maxExp} />
            </div>
            <div>
              {/* buttons */}
              <Button value="Easy Apply" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default JobCard;
