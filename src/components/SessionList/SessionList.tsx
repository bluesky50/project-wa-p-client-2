import React, { Component } from 'react';
import SessionListItem from '../SessionListItem/SessionListItem';

export interface ISessionListProps {
	sessions: any[];
}

export default class SessionList extends Component<ISessionListProps, {}> {
	renderSessions() {
		return this.props.sessions.map((session: any, index) => {
			return <SessionListItem key={index} title={session.title} description={session.description} />;
		});
	}

	render() {
		return (
			<div className="session-list">
				{this.renderSessions()}
			</div>
		);
	}
}
