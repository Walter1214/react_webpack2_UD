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
				<h1>Hello, World!</h1>
				<Footer />
			</div>
		);
	}
}
ReactDOM.render(<App />, document.getElementById('app'));