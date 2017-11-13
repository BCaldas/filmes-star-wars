import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import episodesListReducer from './reducers/EpisodesListReducer';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    combineReducers({
            episodesList: episodesListReducer
        }),
    applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
