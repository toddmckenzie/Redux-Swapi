import React from "react";
import { connect } from "react-redux";
import { fetchCharacters } from '../actions'
import { CharacterList } from "../components";
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log(fetchCharacters)
    this.props.fetchCharacters()

  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <p>hi</p>
    } else {

    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
    }
 }
}

const mapStateToProps = state => {
  return {
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
    fetchCharacters
  }
)(CharacterListView);
