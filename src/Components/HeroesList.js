import React, { Component } from "react";
import { connect } from "react-redux";
import { removeCharacterById } from "../redux/actions";

class HeroesList extends Component {
  render() {
    console.log("heroes", this.props);

    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {this.props.heroes.map(h => {
            return (
              <li key={h.id} className="list-group-item">
                <div className="list-item">{h.name}</div>
                <div
                  className="list-item right_button"
                  onClick={() => this.props.removeCharacterById(h.id)}
                >
                  x
                </div>
              </li>
            );
          })}
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
export default connect(
  mapStateToProps,
  { removeCharacterById }
)(HeroesList);
