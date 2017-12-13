import React from 'react';
import './style.scss';
// import postSubmissionLogo from '../../../asset/img/post_submission_logo.pnsg';
import postSubmissionBtn from '../../../asset/img/post_submission_btn.png';
import postSubmissionBtnHover from '../../../asset/img/post_submission_btn_hover.png';
import postSubmissionPalette from '../../../asset/img/post_submission_palette.png';
import postSubmissionVote from '../../../asset/img/post_submission_vote.png';



class PostSubmission extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpenPopup:false,
			isVote: false,
		};
		this.closePopup = this.closePopup.bind(this);
		this.openPopup = this.openPopup.bind(this);
		this.openVote = this.openVote.bind(this);
		this.closeVote = this.closeVote.bind(this);
	}
	render() {
		return (
			<div className="post-submission">
				<a href="javascript:;" className="post-submission__button" onClick={this.openPopup}>
					<img src={postSubmissionBtn}></img>
					<img src={postSubmissionBtnHover}></img>
				</a>
				<div className={'post-submission__popup ' + (this.state.isOpenPopup ? 'is-on' : '')}>
					<div className={'post-submission__wrapper '+(this.state.isOpenPopup ? 'is-on ' : '') + (this.state.isVote ? 'is-switch' : '')}>
						{this.writePost()}
						{this.writeVote()}
					</div>
				</div>
			</div>
		);
	}

	writePost(){
		return(
			<div className="post-submission__container post-submission__container--front">
				<div className="post-submission__writing">
					<a href="javascript:;" className="post-submission__close-button" onClick={this.closePopup}>
					</a>
					<textarea placeholder="撰寫貼文..."></textarea>
					<img className="post-submission__palette" src={postSubmissionPalette}></img>
				</div>
				<a href="javascript:;" className="post-submission__control" onClick={this.openVote}>
				</a>
			</div>
		);
	}

	writeVote(){
		return(	
			<div className="post-submission__container post-submission__container--back">
				<a href="javascript:;" onClick={this.closeVote}>
					<img src={postSubmissionVote}></img>
				</a>	
			</div>
		);
	}

	closePopup(){
		this.setState({isOpenPopup:false});
		return false;
	}
	openPopup(){
		this.setState({isOpenPopup:true});
	}

	openVote(){
		this.setState({isVote:true});
	}

	closeVote(){
		this.setState({isVote:false});
	}
	
}
export default PostSubmission;