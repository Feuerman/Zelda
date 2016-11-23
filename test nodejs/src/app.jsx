import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {props}
	}
	render() {
		console.log(this.state);
		return (
			<h1>123</h1>
		)
	}
}

