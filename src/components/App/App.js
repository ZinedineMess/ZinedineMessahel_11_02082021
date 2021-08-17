import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../index.css';
import {data} from '../../datas/data';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../views/HomePage/HomePage";
import AboutPage from '../../views/AboutPage/AboutPage';
import ApartmentPage from "../../views/ApartmentPage/ApartmentPage";
import Error404 from "../Error404/Error404";

class App extends Component {
  render() {
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
            <Route>
              <Error404 />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
