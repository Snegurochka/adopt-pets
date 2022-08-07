import { FC } from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface PropsType {
  classPage?: string;
}

const Layout: FC<PropsType> = ({ classPage, children }) => {
  return (
    <>
      <Header />
      <main className={classPage}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
