import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){

	return (
		<footer className="mt-2">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Email: rsickles9@gmail.com
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={6} sm={12}>
                        This site was made with&nbsp;<a href='https://reactjs.org/'>React.JS</a>&nbsp;by Ryan Sickles.
                    </Col>
                </Row>
            </Container>
     </footer>
	);

}

export default Footer;
