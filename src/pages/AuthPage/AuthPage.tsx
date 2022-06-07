import React from "react";
import styles from './AuthPage.module.css';

// components
import AuthForm from '../../components/AuthForm/AuthForm';
import Layout from "../../components/Layout/Layout";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const AuthPage: React.FC = () => {
  return (
    <Layout typeContent="page">
      <div className={styles.wrapper}>
        <AuthForm />
        <SignUpForm />
      </div>
    </Layout>
  );
};

export default AuthPage;