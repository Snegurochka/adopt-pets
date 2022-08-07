import { FC } from "react";
import styles from "./AuthPage.module.css";

// components
import AuthForm from "../../components/AuthForm/AuthForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import ContentWrapper from "../../components/Layout/ContentWrapper/ContentWrapper";

const AuthPage: FC = () => {
  return (
    <ContentWrapper>
      <div className={styles.wrapper}>
        <AuthForm />
        <SignUpForm />
      </div>
    </ContentWrapper>
  );
};

export default AuthPage;
