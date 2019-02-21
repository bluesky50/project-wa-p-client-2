import React, { Component } from 'react';

import { sessions } from '../../seed/data';

import SessionListContainer from '../SessionList/SessionListContainer';

export default class SessionsListPage extends Component {
	render() {
		return (
			<div className="page-container">
				<h3>Sessions List</h3>
				<SessionListContainer sessions={sessions()} />
			</div>
		);
	}
}
