import React from 'react';
import './style.scss';
import postSubmissionLogo from '../../../asset/img/post_submission_logo.png';

class PostSubmission extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<div className="post__submission">
				<a href="javascript:;" className="post__submission--buttom">
					<img src={postSubmissionLogo}></img>
				</a>
				<div className="post__submission--overwrite">
				
				</div>
			</div>
		);
	}
}
export default PostSubmission;