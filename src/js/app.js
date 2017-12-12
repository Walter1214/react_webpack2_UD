import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';
import Footer from './container/footer/index';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}
	render() {
		return (
			<div>
				<Footer />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('app'));