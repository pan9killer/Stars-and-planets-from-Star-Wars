import React, { Component } from 'react';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
import './PeoplePage.css';
import SwapiService from '../../services/http.service';


const Row = ({left, right}) => {
  return (
    <div className="row mb2">
      <div className="col-md-5">
        {left}
      </div>
      <div className="col-md-7">
        {right}
      </div>
    </div>
  );
};

export class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {

    const itemList = (<ItemList onItemSelected={this.onPersonSelected}
      getData={this.swapiService.getAllPeople}
      renderItem={({name,gender,birthYear}) => `${name} (${gender}, ${birthYear})`} />);

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    )

    return (
      <Row 
        left={itemList}
        right={personDetails} />
    )
  }
}

export default PeoplePage
