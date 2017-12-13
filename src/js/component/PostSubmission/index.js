import React from 'react';
import './style.scss';
import postSubmissionLogo from '../../../asset/img/post_submission_logo.png';
import postSubmissionPalette from '../../../asset/img/post_submission_palette.png';
import postSubmissionControl from '../../../asset/img/post_submission_control.png';
import postSubmissionVote from '../../../asset/img/post_submission_vote.png';



class PostSubmission extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			IsOpenPopup:false,
			openIndex: 0,
		};
		this.closePopup = this.closePopup.bind(this);
		this.openPopup = this.openPopup.bind(this);
		this.openVote = this.openVote.bind(this);
		this.openDefault = this.openDefault.bind(this);
	}
	render() {
		return (
			<div className="post-submission">
				<a href="javascript:;" className="post-submission--button" onClick={this.openPopup}>
					<img src={postSubmissionLogo}></img>
				</a>
				<div className={'post-submission--popup ' + (this.state.IsOpenPopup ? 'ON' : '')}>
					{this.writePost()}
					{this.writeVote()}
				</div>
			</div>
		);
	}

	writePost(){
		return(
			<div className={'post-submission--write-post ' +(this.state.openIndex === 0 ? 'ON' : '')}>
				<div className="post-submission--content">
					<a href="javascript:;" className="post-submission--close-button" onClick={this.closePopup}>
					</a>
					<textarea placeholder="撰寫貼文..."></textarea>
					<img className="post-submission_palette" src={postSubmissionPalette}></img>
				</div>
				<a href="javascript:;" onClick={this.openVote}>
					<img src={postSubmissionControl}></img>
				</a>
			</div>
		);
	}

	writeVote(){
		return(	
			<div className={'post-submission--vote ' +(this.state.openIndex === 1 ? 'ON' : '')}>
				<a href="javascript:;" onClick={this.openDefault}>
					<img src={postSubmissionVote}></img>
				</a>	
			</div>
		);
	}

	closePopup(){
		this.setState({IsOpenPopup:false});
		return false;
	}
	openPopup(){
		this.setState({IsOpenPopup:true});
	}

	openVote(){
		this.setState({openIndex:1});
	}

	openDefault(){
		this.setState({openIndex:0});
	}
	
}
export default PostSubmission;