import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import avatar from '../assets/images/avatar.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function Hero(props){

	return (
		<Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="row justify-content-md-center py-5" align="center">
                    <Col md={12} sm={12}>
                        <img className="avatar" src={avatar} alt="avatar" />
                        { props.title && <h1 className="display-4 font-weight-bolder">{props.title}</h1> }
                        { props.subTitle && <h3 className="display-5 font-weight-light">{props.subTitle}</h3> }
                        { props.text && <h3 className="display-6 font-weight-light">{props.text}</h3> }
                        { props.quote && <h1 className="display-5 text-muted lead">{props.quote}</h1> }
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
	);
}

export default Hero;