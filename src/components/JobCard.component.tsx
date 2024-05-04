import { useSelector } from "react-redux";

import JobHeader from "./JobHeader.component";
import JobDetails from "./JobDetails.component";
import JobSalary from "./JobSalary.component";
import JobDescription from "./JobDescription.component";
import JobExperience from "./JobExperience.component";
import Button from "./Button.component";

import sand_clock from "../assets/sand_clock.jpeg";
import logo from "../assets/dummy_logo.png";

import styles from "../styles/JobCard.module.css";

import { selectJobs } from "../redux/jobsReducer";

const JobCard = () => {
  const jobs = useSelector(selectJobs);

  return (
    <div className={styles.jobCard}>
      <div>
        {/* job header */}
        <JobHeader image={sand_clock} text="Posted a day ago" />
      </div>
      <div>
        {/* company details */}
        {/* biome-ignore lint/a11y/useValidAriaRole: <explanation> */}
        <JobDetails
          logo={logo}
          company="Ema"
          location="Bengaluru"
          role="Software Development Engineer"
        />
      </div>
      <div>
        {/* salary */}
        <JobSalary salary="₹20 - 30 LPA" />
      </div>
      <div>
        {/* about company */}
        <JobDescription description="cwdcwdcwd" />
      </div>
      <div>
        {/* experience */}
        <JobExperience experience="7 years" />
      </div>
      <div>
        {/* buttons */}
        <Button value="Easy Apply" />
      </div>
    </div>
  );
};

export default JobCard;
