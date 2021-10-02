import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
// components
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Details from './components/Details/Details';
import SearchParams from './components/SearchParams/SearchParams';
import Footer from './components/Footer/Footer';

const App: React.FC = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <Header />
        <Intro />

        <Switch>
          <Route path="/details/:petId" component={Details} />
          <Route path="/" component={SearchParams} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
