import React, { Component } from "react";
import CharactersList from "./CharactersList";
import HeroesList from "./HeroesList";
import SquadStats from "./SquadStats";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SuperSquad</h1>
        <div className="row">
          <div className="col-md-4">
            <CharactersList />
          </div>
          <div className="col-md-4">
            <HeroesList />
          </div>
          <div className="col-md-4">
            <SquadStats />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
