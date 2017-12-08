import React from 'react';
import './style.scss';
import groupLogoUrl from '../../../asset/img/react_logo.png';

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
			<div className="group_list">
				
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
					<li>
						<img src={groupLogoUrl}></img>
						<span>UED Team</span>
					</li>
					<li>
						<img src={groupLogoUrl}></img>
						<span>UED Team</span>
					</li>
					<li>
						<img src={groupLogoUrl}></img>
						<span>UED Team</span>
					</li>
					<li>
						<img src={groupLogoUrl}></img>
						<span>UED Team</span>
					</li>
					<li>
						<img src={groupLogoUrl}></img>
						<span>UED Team</span>
					</li>
				</ul>
			</div>
		);
	}
}

export default Main;