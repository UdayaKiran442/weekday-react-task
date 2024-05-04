import styles from "../styles/Button.module.css";

type Props = {
  value: string;
};

const Button = ({ value }: Props) => {
  return (
    <div>
      <button className={styles.button}>{value}</button>
    </div>
  );
};

export default Button;
