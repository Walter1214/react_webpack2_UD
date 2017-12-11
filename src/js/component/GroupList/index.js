import React from 'react';
import './style.scss';
import groupLogoUrl from '../../../asset/img/react_logo.png';
import groupMore from '../../../asset/img/group_list_more.png';

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			groupList:[
				{imgUrl: groupLogoUrl,name:'UED Team'}
			]
		};
	}

	render() {
		return (
			<div className="group__list">
				
				<ul>
					{/* {
						this.state.groupList.forEach((element) => {
							return (
								<li>
									<img src={element.img}></img>
									<span>{element.name}</span>
								</li>
							);
						})
					} */}
					<li className="group__list--group">
						<a href="javascript:;">
							<picture>
								<p className="gruop__list--Red-Point"></p>
								<img src={groupLogoUrl}></img>
							</picture>
							<span>UED Team</span>
						</a>
					</li>
					<li className="group__list--group">
						<a href="javascript:;">
							<picture>
								<p className="gruop__list--Red-Point"></p>
								<img src={groupLogoUrl}></img>
							</picture>
							<span>UED Team</span>
						</a>
					</li>
					<li className="group__list--group">
						<a href="javascript:;">
							<picture>
								<p className="gruop__list--Red-Point"></p>
								<img src={groupLogoUrl}></img>
							</picture>
							<span>UED Team</span>
						</a>
					</li>
					<li className="group__list--group">
						<a href="javascript:;">
							<picture>
								<img src={groupLogoUrl}></img>
							</picture>
							<span>UED Team</span>
						</a>
					</li>
					<li className="group__list--group">
						<a href="javascript:;">
							<picture>
								<img src={groupLogoUrl}></img>
							</picture>
							<span>UED Team</span>
						</a>
					</li>
					<li className="group__list--more">
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