import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';
import EpisodesListContainer from "./containers/EpisodesListContainer";

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <EpisodesListContainer/>
      </div>
      </MuiThemeProvider>
    );
  }
}