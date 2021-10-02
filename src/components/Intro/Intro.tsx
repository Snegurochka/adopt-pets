import styles from "./Intro.module.css";
// import Button from "../UI/Button/Button";

const Intro: React.FC = () => {
  return (
    <div className={styles.wrapp}>
      <h3 className={styles.text}>Planning to Adopt a Pet?</h3>
      {/* <Button className={styles.big}>Get started</Button> */}
    </div>
  );
};

export default Intro;
