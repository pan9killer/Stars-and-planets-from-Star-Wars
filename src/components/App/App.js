import './App.css';

import Header from '../header';
import ItemList from '../itemList';
import PersonDetails from '../personDetails';
// import PlanetDetails from '../planetDetails';
import RandomPlanet from '../randomPlanet';
// import StarshipDetails from '../starshipDetails';

function App() {
  return (
    <div className="app">
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
}

export default App;
