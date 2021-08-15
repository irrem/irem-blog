import "./App.css";
import Header from "./components/Header";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Login from "./pages/Auth";
import NewItem from "./pages/Portfolio/NewItem";
import ItemDetail from "./pages/Portfolio/ItemDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route> 
          <Route path="/about">
            <About />
          </Route><Route path="/itemDetails/:articleId">
            <ItemDetail />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/newItem">
            <NewItem />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
