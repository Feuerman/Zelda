import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

const appContainer = document.getElementById('app');

const data = {
    name: 'Valery',
    lastname: 'Markunin',
    age: '28',
    gender: 'male'
};

ReactDOM.render(
    <App data={data}/>,
    appContainer
);

