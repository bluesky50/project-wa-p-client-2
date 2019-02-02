import React, { Component } from 'react';

export interface ISessionListItemProps {
	title: string;
	description: string;
}

export default class SessionListItem extends Component<ISessionListItemProps, {}> {
	render() {
		const { title, description } = this.props;
		return (
			<div className="session-list-item">
				<h3 className="session-list-item__title">{title}</h3>
				<p className="session-list-item__desc">{description}</p>
			</div>
		);
	}
}
