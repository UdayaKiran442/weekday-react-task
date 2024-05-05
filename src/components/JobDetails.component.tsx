import styles from "../styles/JobDetails.module.css";

// props type
type Props = {
  logo: string;
  company: string;
  role: string;
  location: string;
};

const JobDetails = ({ logo, company, role, location }: Props) => {
  return (
    <div className={styles.jobDetails}>
      <div className={styles.companyLogo}>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <p className={styles.companyName}>{company}</p>
        <p className={styles.role}>{role}</p>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
};

export default JobDetails;
