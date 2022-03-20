import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function Stake() {
    return (
        <div className="page-wrapper">
            <div className="page-header mb-5">
                <Header></Header>
            </div>
            <Container className="page-body explore-details stake" fluid>
                <Container className="list p-relative">
                    <Row className={"flex-row"}>
                        <Col className="content">
                            <h3>Stake Taboo</h3>
                            <div>
                                <label>Stake amount</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="customInputField mb-2"
                                    id="name"
                                    placeholder="0.00"
                                ></input>
                            </div>
                            <div className="stake-bn">
                                <Button className="primary-btn">
                                    Stake Now
                                </Button>
                            </div>
                        </Col>
                        <Col className="bg-own">
                            <label className="closebtn"></label>
                            <div>
                                <ul>
                                    <li>Stake in Taboo and Earn more</li>
                                    <li>APY is 16%</li>
                                    <li>Minimum Lockup period is 3 months</li>
                                    <li>No deposit or Widthdrawl fee</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Stake;
