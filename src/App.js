import React from 'react';

import './App.css';
import EpisodesListContainer from "./containers/EpisodesListContainer";

export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <EpisodesListContainer />
            </div>
        );
    }
}