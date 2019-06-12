import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Players, Header, Form, PlayerDetails } from './components';
import { SET_NAME } from './store/actionTypes';
class App extends Component {
  handleClick = _ => {
    // const { dispatch } = this.props;
    // dispatch({ type: SET_NAME, payload: 'foobar' });
    const { setName } = this.props;
    setName('hello world');
  };
  render() {
    console.log('APP', this.props);
    return (
      <div className="scoreboard">
        <button onClick={this.handleClick}>CLICK ME</button>
        <h1>{this.props.notes.name}</h1>
        <Header />
        <Players />
        <Form />
        <PlayerDetails />
      </div>
    );
  }
}

const mapStateToProps = ({ notes }) => ({ notes });
const mapDispatchToProps = dispatch => ({
  setName: payload => dispatch({ type: SET_NAME, payload })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
//dispatch
