import styles from "../styles/JobDescription.module.css";

// props type
type Props = {
  description: string;
};

const JobDescription = ({ description }: Props) => {
  return (
    <div>
      <h2 className={styles.heading}>Job Description:</h2>
      <p className={styles.jobDescription}>{description}</p>
    </div>
  );
};

export default JobDescription;
