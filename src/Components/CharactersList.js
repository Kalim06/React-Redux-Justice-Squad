import React, { Component } from "react";
import { connect } from "react-redux";
import { addCharacterById } from "../redux/actions";

class CharactersList extends Component {
  render() {
    console.log("props", this.props);

    return (
      <div>
        <h4>Characters</h4>
        <ul className="list-group">
          {this.props.characters.map(c => {
            return (
              <li key={c.id} className="list-group-item">
                <div className="list-item">{c.name}</div>
                <div
                  className="list-item right_button"
                  onClick={() => this.props.addCharacterById(c.id)}
                >
                  +
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
    characters: state.characters
  };
}

export default connect(
  mapStateToProps,
  { addCharacterById }
)(CharactersList);
