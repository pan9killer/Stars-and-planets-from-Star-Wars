import React, { Component } from 'react';

import ItemList from '../itemList';
import PersonDetails from '../personDetails';
import './PeoplePage.css';
import SwapiService from '../../services/http.service';
import ErrorBoundry from '../errorBoundry'

import Row from '../row';

export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({ 
      selectedPerson 
    });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
