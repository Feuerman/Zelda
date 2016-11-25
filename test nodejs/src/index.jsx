import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { user } from './reducers'

import App from './app';

let appContainer = document.querySelector('.city-selected');

let store = createStore(user);

ReactDOM.render(
	<App />,
	appContainer
);