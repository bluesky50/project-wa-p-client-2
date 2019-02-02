import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from '../components/HomePage/HomePage';
import SessionsListPage from '../components/SessionsListPage/SessionsListPage';

export default () => {
	return (
		<React.Fragment>
			<Switch>
				<Route exact={true} path="/" component={HomePage}/>
				<Route exact={true} path="/sessions" component={SessionsListPage}/>
			</Switch>
		</React.Fragment>
	);
};
