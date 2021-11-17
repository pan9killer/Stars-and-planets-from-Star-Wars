export default class SwapiService{

  _apiBase = 'https://swapi.dev/api/';

  getResource = async(url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return res.json();
  }

  getAllPeople = async() => {
    try{
      const res = await this.getResource(`people`);
      return res.results.map(this._transformPerson);
    }catch(err){
      console.log(err);
    };
  };

  getPerson = async(id) => {
    try{
      const person = await this.getResource(`people/${id}/`);
      return this._transformPerson(person);
    }catch(err){
      console.log(err);
    };
  };

  getAllPlanets = async() => {
    try{
      const res = await this.getResource(`planets/`);
      return res.results.map(this._transformPlanet);
    }catch(err){
      console.log(err);
    };
  };

  getPlanet = async(id) => {
      const planet = await this.getResource(`planets/${id}/`);
      return this._transformPlanet(planet);
  };

  getAllStarships = async() => {
    try{
      const res = await this.getResource(`starships/`);
      return res.results.map(this._transformStarship);
    }catch(err){
      console.log(err);
    };
  };

  getStarship = async(id) => {
    try{
      const starship = await this.getResource(`starships/${id}/`)
      return this._transformStarship(starship);
    }catch(err){
      console.log(err);
    };
  };

  _extractId = (item) =>  {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = (planet) => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity
    }
  }

  _transformPerson = (person) => {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  };
};