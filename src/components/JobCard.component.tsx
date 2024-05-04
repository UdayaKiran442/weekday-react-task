import JobHeader from "./JobHeader.component";
import JobDetails from "./JobDetails.component";

import sand_clock from "../assets/sand_clock.jpeg";
import logo from "../assets/dummy_logo.png";
import JobSalary from "./JobSalary.component";

const JobCard = () => {
  return (
    <div>
      <div>
        {/* job header */}
        <JobHeader image={sand_clock} text="Posted a day ago" />
      </div>
      <div>
        {/* company details */}
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
      <div>{/* about company */}</div>
      <div>{/* experience */}</div>
      <div>{/* buttons */}</div>
    </div>
  );
};

export default JobCard;
