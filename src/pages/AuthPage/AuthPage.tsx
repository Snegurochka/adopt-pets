import React from "react";

// components
import AuthForm from '../../components/AuthForm/AuthForm';
import Layout from "../../components/Layout/Layout";

const AuthPage: React.FC = () => {
  return (
    <Layout ><AuthForm /></Layout>
    );
};

export default AuthPage;