const axios = require('axios');

const instance = axios.create({baseURL: 'https://swapi.dev/api/'})


export default class SwapiService{
  async getAllPeople(){
    try{
      const res = await instance.get(`people/`);
      // .then((response) => response.data);
      return res.results.map(this._transformPerson);
    }catch(err){
      console.log(err);
    };
  };

  async getPerson(id){
    try{
      const person = await instance.get(`people/${id}/`);
      return this._transformPerson(person);
    }catch(err){
      console.log(err);
    };
  };

  async getAllPlanets(){
    try{
      const res = await instance.get(`planets/`);
      return res.results.map(this._transformPlanet);
    }catch(err){
      console.log(err);
    };
  };

  async getPlanet(id){
    try{
      const planet = await instance.get(`planets/${id}/`);
      console.log(planet.data);
      return this._transformPlanet(planet.data);
    }catch(err){
      console.log(err);
    };
  };

  async getAllStarships(){
    try{
      const res = await instance.get(`starships/`);
      return res.results.map(this._transformStarship);
    }catch(err){
      console.log(err);
    };
  };

  async getStarship(id){
    try{
      const starship = await instance.get(`starships/${id}/`)
      return this._transformStarship(starship);
    }catch(err){
      console.log(err);
    };
  };

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    };
  }

  _transformStarship(starship) {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson(person) {
    return {
      id: this._extractId(person),
      name: person.name,
      gender: person.gender,
      birthYear: person.birthYear,
      eyeColor: person.eyeColor
    }
  };
};