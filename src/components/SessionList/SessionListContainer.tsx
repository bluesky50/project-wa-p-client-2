import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SessionList from './SessionList';
import SessionDetailPane from './SessionDetailPane';

export interface ISessionListContainerProps {
	sessions: any[];
}

export interface ISessionListContainerState {
	searchInput: string;
	selectedSession: any;
}

export default class SessionListContainer extends Component<ISessionListContainerProps, ISessionListContainerState> {
	constructor(props: ISessionListContainerProps) {
		super(props);

		this.state = {
			searchInput: '',
			selectedSession: null,
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.selectSession = this.selectSession.bind(this);
	}

	onChange(event: any) {
		event.preventDefault();
		this.setState({
			searchInput: event.target.value,
		});
	}

	onSubmit() {
		return null;
	}

	selectSession(sessionId: string) {
		const filteredSessions = this.props.sessions.filter((session) => {
			return session.id === sessionId;
		});

		if (filteredSessions.length > 0) {
			this.setState({
				selectedSession: filteredSessions[0],
			});
		}
	}

	render() {
		const { sessions } = this.props;
		const { searchInput, selectedSession } = this.state;
		const filteredSessions = searchInput === '' ? sessions : sessions.filter((session) => {
			return session.title.includes(searchInput)
						|| session.description.includes(searchInput);
		});
		return (
			<div className="session-list-container">
				<div className="session-list-container__left">
					<SearchBar onChange={this.onChange} onSubmit={this.onSubmit} value={searchInput}/>
					<SessionList sessions={filteredSessions} selectSession={this.selectSession} />
				</div>
				<div className="session-list-container__right">
					<SessionDetailPane session={selectedSession}/>
				</div>
			</div>
		);
	}
}
