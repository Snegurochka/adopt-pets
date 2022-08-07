import { FC } from "react";
import styles from "./ContentWrapper.module.css";

interface PropsType {
  header?: string;
}

const ContentWrapper: FC<PropsType> = ({ header, children }) => {
  return (
    <section className={styles.wrapper}>
      {header ? <h1>{header}</h1> : null}
      {children}
    </section>
  );
};

export default ContentWrapper;
