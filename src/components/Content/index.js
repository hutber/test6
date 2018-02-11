import React from 'react';
import {connect} from 'react-redux';
import Header from '../Header';

import style from './style.css';

class Content extends React.Component {
	render(){
		return (
			<div className={this.props.menuState === true ? `${style.index} ${style.appShell}` : style.index}>
				<Header />
				<h1>My Dashboard</h1>
			</div>
		);
	}
}

function matchStateToProps(state){
	return {
		menuState: state.menu.open
	}
}

export default connect(matchStateToProps)(Content);
