import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

//actions
import * as menuActions from '../../actions/menuAction';

//components
import MenuItem from './MenuItem';

//Styles
import style from './style.css';

class Menu extends React.Component {
	constructor (props){
		super(props);

		this.closeMenu = this.closeMenu.bind(this);
	}

	closeMenu() {
		this.props.closeMenu();
	}

	render(){
		return (
			<div className={this.props.menuState === true ? `${style.menu} ${style.menuOpen}` : style.menu}>
				<div className={style.logo}>MyMatters</div>
				<div className={style.nav}>
					<h2>MY MATTERS</h2>
					<a href="/forest">
						<i className="glyphicon glyphicon-briefcase"></i>
						Forest
					</a>
					<a href="/sebastian">
						<i className="glyphicon glyphicon-briefcase"></i>
						Sebastian
					</a>
					<a href="/marengo">
						<i className="glyphicon glyphicon-briefcase"></i>
						Marengo
					</a>
				</div>
				<div className={style.nav}>
					<h2>MY CHATS</h2>
					<a href="/grenadier">
						<i className="glyphicon glyphicon-briefcase"></i>
						Grenadier
					</a>
					<a href="/team_d_associates">
						<i className="glyphicon glyphicon-briefcase"></i>
						Team D Associates
					</a>
					<a href="/london_running_club">
						<i className="glyphicon glyphicon-briefcase"></i>
						London Running Club
					</a>
				</div>
				<div className={`${style.nav} ${style.selected}`}>
					<h2>My Dashboard</h2>
				</div>
				<div className={style.nav}>
					<h2>Search</h2>
				</div>
				<div className={style.items}>
					<MenuItem />
				</div>
			</div>
		);
	}
}


function matchStateToProps(state){
	return {
		menuState: state.menu.open
	}
}

function matchDispatchToProps(dispatch){
	return {
		closeMenu: bindActionCreators(menuActions.closeMenu, dispatch),
	}
}


export default connect(matchStateToProps, matchDispatchToProps)(Menu);
