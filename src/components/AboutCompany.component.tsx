import styles from "../styles/AboutCompany.module.css";

const AboutCompany = () => {
  return (
    <div>
      <h2 className={styles.aboutCompany}>About Company:</h2>
      <h3 className={styles.aboutUs}>About us</h3>
      <p className={styles.companyDescription}>
        Ema is building the next generation AI technology to empower every
        employee in the enterprise to be their most creative and productive. Our
        proprietary tech allows enterprises to delegate most repetitive tasks to
        Ema, the AI employee. We are founded by ex-Google, Coinbase, Okta
        executives and serial entrepreneurs. We’ve raised capital from notable
        investors such as Accel Partners, Naspers, Section32 and a host of
        prominent Silicon Valley Angels including Sheryl Sandberg
      </p>
    </div>
  );
};

export default AboutCompany;
