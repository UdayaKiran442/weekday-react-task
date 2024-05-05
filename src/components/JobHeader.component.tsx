import styles from "../styles/JobHeader.module.css";

// props type
type Props = {
  image: string;
  text: string;
};

// JobHeader component
const JobHeader = ({ image, text }: Props) => {
  return (
    <div className={styles.jobHeader}>
      <img src={image} alt="timeline" />
      <p>{text}</p>
    </div>
  );
};

export default JobHeader;
