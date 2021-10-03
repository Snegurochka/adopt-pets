import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
// components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/details/:petId" component={Details} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
