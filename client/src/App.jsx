import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Players, Header, Form, PlayerDetails } from './components';

class App extends Component {
  render() {
    const { players = [], selectedPlayerId } = this.props;
    const selectedPlayer = players.find(player => player.id === selectedPlayerId);
    return (
      <div className="scoreboard">
        <Header players={players} />
        <Players players={players} />
        <Form />
        <PlayerDetails selectedPlayer={selectedPlayer} />
      </div>
    );
  }
}

const mapStateToProps = ({ player }) => ({ ...player });

export default connect(mapStateToProps)(App);
