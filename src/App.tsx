import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase.utils";
import { setUser } from "./store/AC/user";
import setAccessToken from "./store/AC/accessToken";
import API from "./API";
import { AppRoute } from "./const";

// Pages
import Home from './pages/Home/Home';
import AuthPage from './pages/AuthPage/AuthPage';
import Details from './pages/Details/Details';
import Account from "./pages/Account/Account";
import NotFound from "./pages/NotFound/NotFound";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Auth PetFinder API to get animals
    async function getAccessToken() {
      const newToken = (await API.oauthToken());
      dispatch(setAccessToken(newToken));
    }
    getAccessToken();

    // Auth account
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.HOME} exact component={Home} />
        <Route path={AppRoute.AUTH} component={AuthPage} />
        <Route path={AppRoute.ACCOUNT} component={Account} />
        <Route path={AppRoute.DETAILS} component={Details} />
        <Route path={AppRoute.FAVORITES} component={FavoritesPage} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
