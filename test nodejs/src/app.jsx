<<<<<<< HEAD
import lodash from 'lodash';

=======
>>>>>>> c619bfdfc9cf7d75f75d803a26e24d7c04338798
import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
	constructor(props) {
		super(props);
<<<<<<< HEAD
		this.state = {
			value: ''
		}	
		this.handleChange = this.handleChange.bind(this);	
		this.handleSubmit = this.handleSubmit.bind(this);	
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}
	handleSubmit(event) {
		console.log('This form value submit is ' + this.state.value);
		event.preventDefault();
	}
	render()  {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Select city
					<select value={this.state.value} onChange={this.handleChange}>
						<option value="moskow">moskow</option>
						<option value="samara">samara</option>
						<option value="volgograd">volgograd</option>
						<option value="kiev">kiev</option>
					</select>
					<input type="submit" value="Submit" />
				</label>
			</form>
		)
	}
}
=======
		this.state = {props}
	}
	render() {
		console.log(this.state);
		return (
			<h1>123</h1>
		)
	}
}

>>>>>>> c619bfdfc9cf7d75f75d803a26e24d7c04338798
