import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_PLAYER } from '../store/actionTypes';

class Form extends Component {
  state = { name: String(), age: String() };

  handleInputChange = field => e => this.setState({ [field]: e.target.value });

  handleSubmit = e => {
    const { addPlayer } = this.props;
    e.preventDefault();
    this.setState({ name: String(), age: String() });
    addPlayer(this.state);
  };

  render() {
    const { name, age } = this.state;
    return (
      <div className="add-player-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={name} onChange={this.handleInputChange('name')} placeholder="Player Name" />
          <input type="text" value={age} onChange={this.handleInputChange('age')} placeholder="Player Age" />
          <input type="submit" value="Add Player" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPlayer: payload => dispatch({ type: ADD_PLAYER, payload })
});

export default connect(
  null,
  mapDispatchToProps
)(Form);
