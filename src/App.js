import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';

class App extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			title: "Ryan Sickles Website",
			headerLinks: [
			{title: "Home", path: "/"},
			{title: "Technology", path: "/technology"},
			{title: "About", path: "/about"}
			],
			home : {
				title: "Ryan Sickles",
				subTitle: "Associate Product Manager @ Vertica",
				text: "Boston, MA",
        quote: "Helping to launch product offerings with the Vertica Analytic Database"
			}
		}
	}


  render() {
  	return (
  	<Router>
  			<Container fluid={true}>
  			<Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} quote={this.state.home.quote} />}  />
  	   <Footer />
  		</Container>
  	</Router>

  	);
   }
}

export default App;
