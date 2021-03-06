import lodash from 'lodash';
import FormUser from './formUser/index'

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './form-city.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
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
			<div>
				<FormUser />
				<form onSubmit={this.handleSubmit} className={styles.form}>
					<label className={styles.label}>
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
				<button>{this.state.value}</button>
			</div>
		)
	}
}