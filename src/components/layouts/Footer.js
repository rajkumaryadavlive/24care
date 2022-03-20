import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import footerLogo from "../../assets/footer/On24care.png";
import instagram from "../../assets/footer/instagram.png";
import twitter from "../../assets/footer/twitter.png";
import youtube from "../../assets/footer/youtube.png";

// instagram

function Footer() {
    return (
        <Container className="footer-wrapper" fluid>
            <Container className="news-letter">
                <Row>
                    <Col lg={6}>
                        <h4>News Letter</h4>
                        <p className="content-details-md">
                            Sign up our news letter to get the latest news in
                            your inbox
                        </p>
                    </Col>
                    <Col lg={6} className="p-relative align-self-center">
                        <Form.Control
                            size="lg"
                            type="text"
                            placeholder="Enter your email here"
                        />
                        <Button className="primary-btn">Submit</Button>
                    </Col>
                </Row>
            </Container>
            <Container className="footer-links content-details-md">
                <Row>
                    <Col lg={3}>
                        <img className="mb-3" src={footerLogo} alt="logo"></img>
                        <br></br>
                        <p>
                            For any support or feedback please mail to
                            info@on24care.com.<br></br> The support
                            will provided asap
                        </p>
                    </Col>
                    <Col lg={3}>
                        <h2>Our Links</h2>
                        <ul>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Doctors</li>
                            <li>Lab Tests</li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h2>Policy</h2>
                        <ul>
                            <li>Terms & Condition</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </Col>
                    <Col className="social" lg={3}>
                        <h2>Socila Links</h2>
                        <div className="d-flex w-50 justify-content-between footer-social-link">
                            <div>
                                <img src={twitter} alt="logo"></img>
                            </div>
                            <div>
                                <img src={youtube} alt="logo"></img>
                            </div>
                            <div>
                                <img src={instagram} alt="logo"></img>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="my-2 p-3 mb-0">
                <div className="footer-copyright">
                    Copyright @ 2021 Taboo All rights reserved
                </div>
            </Container>
        </Container>
    );
}

export default Footer;
