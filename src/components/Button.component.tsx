import styles from "../styles/Button.module.css";

// props type
type Props = {
  value: string;
};

// button component
const Button = ({ value }: Props) => {
  return (
    <div>
      {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
      <button className={styles.button}>{value}</button>
    </div>
  );
};

export default Button;
