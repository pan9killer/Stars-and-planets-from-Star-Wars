import React, { Component } from 'react';

import './App.css';
import Header from '../header';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
// import PlanetDetails from '../planetDetails';
import RandomPlanet from '../randomPlanet';
// import StarshipDetails from '../starshipDetails';

export default class App extends Component {

  state = {
    showRandomPlanet: true,
    selectedPerson: 3
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <div className="stardb-app app">
        <Header />
        { planet }

        <button
          className="toggle-planet btn btn-warning btn-lg btn-margn"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  };
};
