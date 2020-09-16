import React from 'react';

import Card from '../components/Card';

import linkedin from '../assets/images/linkedin.png';
import github from '../assets/images/github.png';
import soundcloud from '../assets/images/soundcloud.png';
import accenture from '../assets/images/accenture_logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			items: [
                {
                    id: 0,
                    title: '',
                    subTitle: 'Resume',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/ryan-sickles-197a6077/',
                    selected: false
                },
                {
                    id: 1,
                    title: '',
                    subTitle: 'Employer',
                    imgSrc: accenture,
                    link: 'https://accenture.com',
                    selected: false
                },
                {
                    id: 2,
                    title: '',
                    subTitle: 'Projects',
                    imgSrc: github,
                    link: 'https://github.com/rsickles',
                    selected: false
                }

            ]
		}
	}

	handleCardClick = (id,click) => {
		let items = [...this.state.items];
		items[id].selected = items[id].selected ? false : true;

		items.forEach(item => {
			if(item.id !== id){
				item.selected = false;
			}
		})
			this.setState({
				items
			})
	}


	makeItems = (items) => {
		return items.map(item => {
			return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
		})
	}

	render(){
		return (
			<Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
      </Container>
		);
	}

}

export default Carousel;