import React, { Component } from 'react';

export interface ISessionListItemProps {
	session: any;
	selectSession: (sessionId: string) => void;
}

export default class SessionListItem extends Component<ISessionListItemProps, {}> {
	constructor(props: ISessionListItemProps) {
		super(props);

		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.props.selectSession(this.props.session.id);
	}

	render() {
		const { session } = this.props;
		const { title, description } = session;
		return (
			<div className="session-list-item" onClick={this.onClick}>
				<h3 className="session-list-item__detail">{title}</h3>
				<p className="session-list-item__detail">{description}</p>
			</div>
		);
	}
}
