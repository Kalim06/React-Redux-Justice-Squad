import React, { Component } from "react";
import { connect } from "react-redux";

class SquadStats extends Component {
  strength() {
    let strength = 0;
    this.props.heroes.forEach(h => (strength += h.strength));
    return strength;
  }
  speed() {
    let speed = 0;
    this.props.heroes.forEach(h => (speed += h.speed));
    return speed;
  }
  intelligence() {
    let intelligence = 0;
    this.props.heroes.forEach(h => (intelligence += h.intelligence));
    return intelligence;
  }

  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Overall Strength: </b>
            {this.strength()}
          </li>
          <li className="list-group-item">
            <b>Overall Speed: </b>
            {this.speed()}
          </li>
          <li className="list-group-item">
            <b>Overall Intelligence: </b>
            {this.intelligence()}
          </li>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  };
}
export default connect(mapStateToProps)(SquadStats);
