/* eslint-disable import/max-dependencies */
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux'


//# Reducers
	//menu
		import menuReducer from './menuReducer'

const reducers = combineReducers({
  router: routerReducer,
	menu: menuReducer
});

export default reducers;
