import { FC } from "react";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { selectCurrentUser } from "../../store/selectors/user";

import { AppRoute } from "../../const";
import ContentWrapper from "../../components/Layout/ContentWrapper/ContentWrapper";

const Account: FC = () => {
  const user = useSelector(selectCurrentUser);
  return (
    <ContentWrapper header="My account">
      {user ? (
        <div>
          <Link to={AppRoute.FAVORITES}>Favorites</Link>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </ContentWrapper>
  );
};

export default Account;
