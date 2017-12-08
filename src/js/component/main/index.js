import img from '../../../asset/img/react_logo.png';
import React from 'react';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<div>
				<h1>Hi Main!</h1>
				<img className="test" src={img}></img>
			</div>
		);
	}
}

export default Main;