import styles from "../styles/JobSalary.module.css";

type Props = {
  salary: string;
};

const JobSalary = ({ salary }: Props) => {
  return (
    <div>
      <p className={styles.jobSalary}>Estimated Salary: {salary}✅ </p>
    </div>
  );
};

export default JobSalary;
