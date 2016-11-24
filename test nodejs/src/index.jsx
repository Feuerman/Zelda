import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';

<<<<<<< HEAD
let appContainer = document.getElementById('app');

ReactDOM.render(
	<App />,
	appContainer
);
=======
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

>>>>>>> c619bfdfc9cf7d75f75d803a26e24d7c04338798
