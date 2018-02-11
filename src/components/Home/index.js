import React from 'react';

//Components
import Menu from '../Menu';
import Content from '../Content';

export default class Home extends React.Component {
	render(){
		return (
			<div>
				<Menu />
				<Content />
			</div>
		);
	}
}
