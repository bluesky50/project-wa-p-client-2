import React, { Component } from 'react';

export interface ISearchBarProps {
	onChange: (event: any) => void;
	onSubmit: () => any;
	value: string;
}

export default class SearchBar extends Component<ISearchBarProps, {}> {
	render() {
		return (
			<div className="search-bar">
				<input
					className="search-bar__input"
					type="text"
					placeholder="search"
					value={this.props.value}
					onChange={this.props.onChange}
				/>
			</div>
		);
	}
}
