import React from 'react';
import './style.scss';
import groupLogoUrl from '../../../asset/img/react_logo.png';
import groupMore from '../../../asset/img/group_list_more.png';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<div className="group-list">
				<ul>
					<li className="group-list__group">
						<a href="javascript:;">
							<figure>
								<p className="group-list__red-point"></p>
								<img src={groupLogoUrl}></img>
							</figure>
							<span>UED Team</span>
						</a>
					</li>
					<li className="group-list__group">
						<a href="javascript:;">
							<figure>
								<p className="group-list__red-point"></p>
								<img src={groupLogoUrl}></img>
							</figure>
							<span>UED Team</span>
						</a>
					</li>
					<li className="group-list__group">
						<a href="javascript:;">
							<figure>
								<p className="group-list__red-point"></p>
								<img src={groupLogoUrl}></img>
							</figure>
							<span>UED Team</span>
						</a>
					</li>
					<li className="group-list__group">
						<a href="javascript:;">
							<figure>
								<p className="group-list__red-point"></p>
								<img src={groupLogoUrl}></img>
							</figure>
							<span>UED Team</span>
						</a>
					</li>
					<li className="group-list__group">
						<a href="javascript:;">
							<figure>
								<p className="group-list__red-point"></p>
								<img src={groupLogoUrl}></img>
							</figure>
							<span>UED Team</span>
						</a>
					</li>
					<li className="group-list__more">
						<a href="javascript:;">
							<img src={groupMore}></img>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Main;