import styles from "../styles/JobExperience.module.css";

// props type
type Props = {
  minExp: string;
  maxExp: string;
};

const JobExperience = ({ minExp, maxExp }: Props) => {
  return (
    <div>
      {/* null value handling */}
      {minExp && maxExp && (
        <p className={styles.text}>
          Experience &nbsp;
          {minExp && <span className={styles.text}>{minExp}</span>}
          {minExp && maxExp && <span>&nbsp;-&nbsp;</span>}
          {maxExp && <span className={styles.text}>{maxExp} </span>}
          years{" "}
        </p>
      )}
    </div>
  );
};

export default JobExperience;
