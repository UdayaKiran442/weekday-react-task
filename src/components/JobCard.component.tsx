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

// interface LocationType {
//   remote: string;
//   "on-site": string;
// }

const JobCard = () => {
  const jobs = useSelector(selectJobs);

  const [roles, setRoles] = useState<string[]>();
  const [experiences, setExperiences] = useState<string[]>([]);

  const [filteredRoles, setFilteredRoles] = useState<string[]>([]);
  const [filteredExperiences, setFilteredExperiences] = useState<string[]>([]);

  const [data, setData] = useState<Array<Job>>([]);

  useLayoutEffect(() => {
    // Extracting unique roles from jobs array
    const rolesSet = new Set<string>();
    jobs.forEach((job: Job) => {
      rolesSet.add(job.jobRole);
    });
    const uniqueRolesArray = Array.from(rolesSet);
    setRoles(uniqueRolesArray);
    // Experiences set
    const experiencesSet = new Set<string>();
    jobs.forEach((job: Job) => {
      {
        job.minExp && experiencesSet.add(job.minExp);
      }
    });
    const uniqueExperiencesArray = Array.from(experiencesSet);
    setExperiences(uniqueExperiencesArray);

    let filteredData: Array<Job> = jobs;

    if (filteredRoles.length > 0) {
      filteredData = filteredData.filter((job: Job) =>
        filteredRoles.includes(job.jobRole)
      );
    }

    if (filteredExperiences.length > 0) {
      filteredData = filteredData.filter((job: Job) =>
        filteredExperiences.some((exp) => parseInt(job.minExp) >= parseInt(exp))
      );
    }

    setData(filteredData);
  }, [jobs, filteredRoles, filteredExperiences]);

  return (
    <>
      <div>
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
