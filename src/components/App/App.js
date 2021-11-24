import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ErrorBoundry from '../errorBoundry';
import SwapiService from '../../services/http.service';
import { SwapiServiceProvider } from '../swapiServiceContext';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };


  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app app">
              <Header />
              <RandomPlanet />
              <Routes>
                <Route path="/" element={<h2>My StarDB app</h2> } exact />
                <Route exact path="/people" element={<><h2>People</h2><PeoplePage /></>} />
                <Route exact path="/planets" element={<><h2>Planets</h2><PlanetsPage /></>} />
                <Route exact path="/starships" element={<><h2>Starships</h2><StarshipsPage /></>} />

                <Route exact path="*" element={<h2>Error</h2>} />
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
};
