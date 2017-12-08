import React from 'react';
import Main from '../../component/main/index';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<div>
				<h1>Hi Footer!</h1>
				<Main />
			</div>
		);
	}
}

export default Footer;