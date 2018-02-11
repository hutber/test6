import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//Styles
import style from './style.css';

class Home extends React.Component {
	constructor (props){
		super(props);

		this.showMenu = this.showMenu.bind(this);
	}

	showMenu() {
		console.info('click');
	}

	render(){
		return (
			<nav className={style.nav}>
				<div className={style.leftSide} onClick={this.showMenu}>
					<i className="glyphicon glyphicon-menu-hamburger"></i>
				</div>
				<div className={style.rightSide}>
					<i className="glyphicon glyphicon-bell"></i>
				</div>
			</nav>
		);
	}
}

function matchStateToProps(state){
	return {
		menuState: state.menu.open
	}
}

export default connect(matchStateToProps)(Home);
