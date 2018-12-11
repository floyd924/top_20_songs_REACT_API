import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
// import SongList from './components/SongList.js';
import SongContainer from './containers/SongContainer.js';

class App extends Component {
  render() {
    return (
      <SongContainer/>
    );
  }
}

export default App;
