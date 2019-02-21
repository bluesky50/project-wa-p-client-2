import React, { Component } from 'react';
import SessionListItem from '../SessionListItem/SessionListItem';

export interface ISessionListProps {
	sessions: any[];
	selectSession: (sessionId: string) => void;
}

export default class SessionList extends Component<ISessionListProps, {}> {

	renderSessions() {
		return this.props.sessions.map((session: any, index) => {
			return (
				<SessionListItem
					key={index}
					session={session}
					selectSession={this.props.selectSession}
				/>
			);
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
