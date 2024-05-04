import styles from "../styles/JobExperience.module.css";

type Props = {
  minExp: number;
  maxExp: number;
};

const JobExperience = ({ minExp, maxExp }: Props) => {
  return (
    <div>
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
