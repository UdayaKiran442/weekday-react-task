import styles from "../styles/JobSalary.module.css";

type Props = {
  minJdSalary: number | null;
  maxJdSalary: number | null;
  salaryCurrencyCode: string;
};

const JobSalary = ({ maxJdSalary, minJdSalary, salaryCurrencyCode }: Props) => {
  return (
    <div>
      <p className={styles.jobSalary}>
        Estimated Salary: {`${salaryCurrencyCode}`} &nbsp;
        {minJdSalary && <span className={styles.jobSalary}>{minJdSalary}</span>}
        {minJdSalary && maxJdSalary && <span>&nbsp;-&nbsp;</span>}
        {maxJdSalary && (
          <span className={styles.jobSalary}>{maxJdSalary} </span>
        )}
        LPA✅
      </p>
    </div>
  );
};

export default JobSalary;
