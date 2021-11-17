import React, { Component } from 'react';

import './App.css';
import Header from '../header';
import RandomPlanet from '../randomPlanet';
import PeoplePage from '../peoplePage';
import ErrorBoundry from '../errorBoundry';
import ErrorButton from '../errorButton'

export default class App extends Component {

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <ErrorBoundry>
        <div className="app">
          <Header />
          { planet }

          <div className="row mb2 button-row col-md-5 btn-pad">
            <button
              className="toggle-planet btn btn-warning btn-lg btn-margn "
              onClick={this.toggleRandomPlanet}>
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>
          <PeoplePage />

        </div>
      </ErrorBoundry>
    );
  }
}
