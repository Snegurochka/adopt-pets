import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
// components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/details/:petId" component={Details} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
