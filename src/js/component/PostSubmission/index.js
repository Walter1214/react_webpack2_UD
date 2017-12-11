import React from 'react';
import './style.scss';
import postSubmissionLogo from '../../../asset/img/post_submission_logo.png';
import postSubmissionPalette from '../../../asset/img/post_submission_palette.png';
import postSubmissionControl from '../../../asset/img/post_submission_control.png';


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
				<div className="post__submission--popup">
					<div className="post__submission--container">
						<div className="post__submission--content">
							<textarea placeholder="撰寫貼文..."></textarea>
							<div className="post__submission_palette">
								<img src={postSubmissionPalette}></img>
							</div>
							
						</div>
						<img src={postSubmissionControl}></img>
						{/* <img src={postSubmissionContainer}></img> */}
					</div>
				</div>
			</div>
		);
	}
}
export default PostSubmission;