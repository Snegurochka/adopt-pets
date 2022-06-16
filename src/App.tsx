import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import API from "./API";
import setAccessToken from "./store/AC/accessToken";

// Pages
import Home from './pages/Home/Home';
import AuthPage from './pages/AuthPage/AuthPage';
import Details from './pages/Details/Details';
import Account from "./pages/Account/Account";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase.utils";
import setUser from "./store/AC/user";
import NotFound from "./pages/NotFound/NotFound";

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
        <Route path='/' exact component={Home} />
        <Route path='/auth' component={AuthPage} />
        <Route path='/account' component={Account} />
        <Route path="/details/:petId" component={Details} />
        <Route path='/*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
