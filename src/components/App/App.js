import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../index.css';
import {data} from '../../datas/data';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import HomePage from "../../views/HomePage/HomePage";
import AboutPage from '../../views/AboutPage/AboutPage';
import ApartmentPage from "../../views/ApartmentPage/ApartmentPage";

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/'>
            <HomePage />
        </Route>
        <Route exact path="/apartment/:id" render={(props) => (
            <ApartmentPage {...props} apartments={data} />
            )}/>
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
