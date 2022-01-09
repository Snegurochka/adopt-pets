import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import API from "./API";
import setAccessToken from "./store/AC/accessToken";

// Pages
import Home from './pages/Home/Home';
import Details from './pages/Details/Details';

// components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


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
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path="/details/:petId" component={Details} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
