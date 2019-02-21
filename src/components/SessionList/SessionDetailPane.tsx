import React, { Component } from 'react';

export interface ISessionDetailPaneProps {
	session: any;
}

const SessionDetailPane = (props: ISessionDetailPaneProps) => {
	if (props.session) {
		return (
			<div className="session-detail-pane">
				<h3>{props.session.title}</h3>
				<p>{props.session.description}</p>
				<p>details</p>
				<p>details</p>
				<p>details</p>
				<p>details</p>
				<button className="session-detail-pane__join-button">Join</button>
			</div>
		);
	}
	return (
		<div className="session-detail-pane">
			<p>Select a session on the left</p>
		</div>
	);
};

export default SessionDetailPane;
