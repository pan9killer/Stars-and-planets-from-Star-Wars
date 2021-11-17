import React, { Component } from 'react';

import './App.css';
import Header from '../header';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
// import PlanetDetails from '../planetDetails';
import RandomPlanet from '../randomPlanet';
// import StarshipDetails from '../starshipDetails';
import PeoplePage from '../peoplePage';
import SwapiService from '../../services/http.service';

export default class App extends Component {

  swapiService = new SwapiService();

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
      <div className="stardb-app app">
        <Header />
        { planet }

        <button
          className="toggle-planet btn btn-warning btn-lg btn-margn"
          onClick={this.toggleRandomPlanet}>
          Toggle Random Planet
        </button>

        <PeoplePage />
        <div className="row mb2">
          <div className="col-md-5">
            <ItemList onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPlanets}
            renderItem={(item)=>item.name}  />
          </div>
          <div className="col-md-7">
            <PersonDetails personId={this.state.selectedPerson}
              />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-5">
            <ItemList onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllStarships}
            renderItem={(item)=>item.name}  />
          </div>
          <div className="col-md-7">
            <PersonDetails personId={this.state.selectedPerson} 
              />
          </div>
        </div>

      </div>
    );
  };
};
