import React from 'react';
import './style.scss';
import GroupList from '../../component/GroupList/index';
import PostSubmission from '../../component/PostSubmission/index';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<div className="footer">
				<span>Groups</span>
				<GroupList />
				<PostSubmission />
			</div>
		);
	}
}

export default Footer;