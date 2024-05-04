import { useSelector } from "react-redux";

import JobHeader from "./JobHeader.component";
import JobDetails from "./JobDetails.component";
import JobSalary from "./JobSalary.component";
import JobDescription from "./JobDescription.component";
import JobExperience from "./JobExperience.component";
import Button from "./Button.component";

import sand_clock from "../assets/sand_clock.jpeg";

import styles from "../styles/JobCard.module.css";

import { selectJobs } from "../redux/jobsReducer";

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
  const jobs = useSelector(selectJobs);

  return (
    <div className={styles.jobsCard}>
      {jobs.map((job: Job) => (
        <div className={styles.jobCard}>
          <div>
            {/* job header */}
            <JobHeader image={sand_clock} text="Posted a day ago" />
          </div>
          <div>
            {/* company details */}
            {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
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
  );
};

export default JobCard;
