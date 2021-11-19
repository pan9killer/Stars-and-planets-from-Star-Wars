import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../randomPlanet';
import ErrorBoundry from '../errorBoundry';
import SwapiService from '../../services/http.service';
import { SwapiServiceProvider } from '../swapiServiceContext';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';

import './App.css';

export default class App extends Component {

  swapiService = new SwapiService();

  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.swapiService} >
          <div className="stardb-app">
            <Header />

            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
