import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';

function Contact() {

    return (

        <div className="page-wrapper">
            <div className="page-header mb-5">
                <Header></Header>
                <Container>
                    <Row className="justify-content-between m-3 mt-5">
                        <Col xs="auto">
                            <h3>Contact Us</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="page-body explore-details" fluid>
                <Container className="list p-relative">
                    <Row>
                        <Col className="contact-img">
                            <div className="contact-content">
                                <div>
                                    <h1 className="mb-3">Do you any Questions</h1>
                                    <p>
                                        Suggestions ! Please fill out the form and representative will respond, as soon as we can
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="contact-form-content">
                            <h2>Send us a message
                            </h2>
                            <Row>
                                <Col xl={12}>
                                    <input
                                        type="text"
                                        name="name"
                                        className="customInputField"
                                        id="name"
                                        placeholder="Your Name" />
                                </Col>
                                <Col xl={12}>
                                    <input
                                        type="email"
                                        name="email"
                                        className="customInputField"
                                        id="email"
                                        placeholder="Your Email" />
                                </Col>
                                <Col xl={12}>
                                    <input
                                        type="text"
                                        name="phone"
                                        className="customInputField"
                                        id="phone"
                                        placeholder="Phone" />
                                </Col>
                                <Col xl={12}>
                                    <textarea
                                        type="text"
                                        name="message"
                                        rows="3"
                                        className="customInputField"
                                        id="message"
                                        placeholder="Message">
                                    </textarea>
                                </Col>
                                <Col className="text-center">
                                    <Button className="primary-btn" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </Container>
            <Footer></Footer>
        </div>
    )
}

export default Contact;