import styles from "../styles/JobHeader.module.css";

type Props = {
  image: string;
  text: string;
};

const JobHeader = ({ image, text }: Props) => {
  return (
    <div className={styles.jobHeader}>
      <img src={image} alt="timeline" />
      <p>{text}</p>
    </div>
  );
};

export default JobHeader;
