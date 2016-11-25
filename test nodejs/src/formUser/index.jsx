import lodash from 'lodash';

import React from 'react';
import ReactDOM from 'react-dom';

import styles from './form-user.css';

export default class FormUser extends React.Component {
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
				<form onSubmit={this.handleSubmit} className={styles.form}>
					<label>
						Select city
						<select value={this.state.value} onChange={this.handleChange}>
							<option value="vasya">Vasya</option>
							<option value="petya">Petya</option>
							<option value="masha">Masha</option>
							<option value="misha">Misha</option>
						</select>
						<input type="submit" value="Submit" />
					</label>
				</form>
				<button>{this.state.value}</button>
			</div>
		)
	}
}