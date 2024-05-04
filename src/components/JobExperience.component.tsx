import styles from "../styles/JobExperience.module.css";

type Props = {
  experience: string;
};

const JobExperience = ({ experience }: Props) => {
  return (
    <div>
      <p className={styles.text}>Minimum Experience</p>
      <p className={styles.experience}>{experience}</p>
    </div>
  );
};

export default JobExperience;
