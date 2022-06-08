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

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function getAccessToken() {
      const newToken = (await API.oauthToken());
      dispatch(setAccessToken(newToken));
    }
    getAccessToken();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/auth' component={AuthPage} />
        <Route path='/account' component={Account} />
        <Route path="/details/:petId" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
