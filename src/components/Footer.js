import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){

	return (
		<footer className="mt-3">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col md={5} sm={12}>
                        This site was made with&nbsp;<a href='https://reactjs.org/'>React.JS</a>&nbsp;by&nbsp;<a href="mailto:rsickles9@gmail.com">Ryan Sickles</a>
                    </Col>
                </Row>
            </Container>
     </footer>
	);

}

export default Footer;
