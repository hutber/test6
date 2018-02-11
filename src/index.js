import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import hashHistory from 'history/createBrowserHistory' //history api
const history = hashHistory({ basename: '/' });
import configureStore from './configureStore';
import Routes from './routes';
import './components/shared/main.css';

const store = configureStore(history);

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Routes/>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app')
);
