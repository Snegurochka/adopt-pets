import { FC, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase.utils";
import { setUser } from "./store/AC/user";
import setAccessToken from "./store/AC/accessToken";
import { fetchFavoriteAnimals } from "./store/AC/favorites";
import { selectCurrentUser } from "./store/selectors/user";
import API from "./API";
import { AppRoute } from "./const";

// Pages
import NotFound from "./pages/NotFound/NotFound";
import Spinner from "./components/Spinner/Spinner";
import Layout from "./components/Layout/Layout";

const Home = lazy(() => import("./pages/Home/Home"));
const Details = lazy(() => import("./pages/Details/Details"));
const AuthPage = lazy(() => import("./pages/AuthPage/AuthPage"));
const Account = lazy(() => import("./pages/Account/Account"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));

const App: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  useEffect(() => {
    // Auth PetFinder API to get animals
    async function getAccessToken() {
      const newToken = await API.oauthToken();
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

  useEffect(() => {
    if (!user) return;

    dispatch(fetchFavoriteAnimals(user.uid));
  }, [user]);

  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route path={AppRoute.HOME} exact component={Home} />
            <Route path={AppRoute.AUTH} component={AuthPage} />
            <Route path={AppRoute.ACCOUNT} component={Account} />
            <Route path={AppRoute.DETAILS} component={Details} />
            <Route path={AppRoute.FAVORITES} component={FavoritesPage} />
            <Route path="/*" component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
