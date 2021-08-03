import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../index.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import HomePage from "../../views/HomePage";
import AboutPage from '../../views/AboutPage'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
            <HomePage />
        </Route>
        <Route exact path='/About'>
          <AboutPage />
        </Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
