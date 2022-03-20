import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import taboo from "../assets/adult/taboo-icon.png";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { LoaderContext } from "../context";

function Alltransactions() {
    const [, dispatch] = React.useContext(LoaderContext);

    React.useEffect(() => {
        dispatch({
            type: "SHOWLOADER",
            payload: true,
        });
        setTimeout(() => {
            dispatch({
                type: "HIDELOADER",
                payload: true,
            });
        }, 1000);
    }, []);
    return (
        <div className="page-wrapper">
            <div className="page-header mb-5">
                <Header></Header>
                <Container>
                    <Row className="justify-content-between m-3 mt-5">
                        <Col xs="auto">
                            <h3>All Transactions</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="page-body explore-details" fluid>
                <Container className="list p-relative background-none">
                    <div className="row row-height">
                        <div className="col-auto round-wrapper p-3 d-none d-md-block">
                            <div className="round bolded-text">1</div>
                        </div>
                        <div className="col transaction-wrapper mt-2 m-md-0">
                            <Row className="justify-content-between first">
                                <Col xs="auto bolded-text-15">01 Nov 2021</Col>
                                <Col xs="auto">View NFT: 23423</Col>
                            </Row>
                            <Row className="second">
                                <Col lg={3} className="img-desc-col">
                                    <div className="d-flex">
                                        <img src={taboo} alt="logo"></img>
                                        <p>
                                            17 JLN PJS 11/1 TAMAN BANDAR SUNWAY
                                            Petaling Jay, Petaling Jaya
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <small>Paid</small>
                                    <div className="bolded-text">
                                        <b>$10.00</b>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <small>
                                        Transaction Hash ( Taboo ): 2234234
                                    </small>
                                    <br />
                                    <small>
                                        Transaction Hash ( Taboo ): 2234234
                                    </small>
                                </Col>
                                <Col lg={3}>
                                    <small>Status</small>
                                    <br />
                                    <Button className="success-btn-sm">
                                        Paid
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="row row-height">
                        <div className="col-auto round-wrapper p-3 d-none d-md-block">
                            <div className="round bolded-text">2</div>
                        </div>
                        <div className="col transaction-wrapper mt-2 m-md-0">
                            <Row className="justify-content-between first">
                                <Col xs="auto bolded-text-15">01 Nov 2021</Col>
                                <Col xs="auto">View NFT: 23423</Col>
                            </Row>
                            <Row className="second">
                                <Col lg={3} className="img-desc-col">
                                    <div className="d-flex">
                                        <img src={taboo} alt="logo"></img>
                                        <p>
                                            17 JLN PJS 11/1 TAMAN BANDAR SUNWAY
                                            Petaling Jay, Petaling Jaya
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <small>Paid</small>
                                    <div className="bolded-text">
                                        <b>$10.00</b>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <small>
                                        Transaction Hash ( Taboo ): 2234234
                                    </small>
                                    <br />
                                    <small>
                                        Transaction Hash ( Taboo ): 2234234
                                    </small>
                                </Col>
                                <Col lg={3}>
                                    <small>Status</small>
                                    <br />
                                    <Button className="success-btn-sm">
                                        Paid
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="row row-height">
                        <div className="col-auto round-wrapper p-3 d-none d-md-block">
                            <div className="round bolded-text">3</div>
                        </div>
                        <div className="col transaction-wrapper mt-2 m-md-0">
                            <Row className="justify-content-between first">
                                <Col xs="auto bolded-text-15">01 Nov 2021</Col>
                                <Col xs="auto">View NFT: 23423</Col>
                            </Row>
                            <Row className="second">
                                <Col lg={3} className="img-desc-col">
                                    <div className="d-flex">
                                        <img src={taboo} alt="logo"></img>
                                        <p>
                                            17 JLN PJS 11/1 TAMAN BANDAR SUNWAY
                                            Petaling Jay, Petaling Jaya
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <small>Paid</small>
                                    <div className="bolded-text">
                                        <b>$10.00</b>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <small>
                                        Transaction Hash ( Taboo ): 2234234
                                    </small>
                                    <br />
                                    <small>
                                        Transaction Hash ( Taboo ): 2234234
                                    </small>
                                </Col>
                                <Col lg={3}>
                                    <small>Status</small>
                                    <br />
                                    <Button className="success-btn-sm">
                                        Paid
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>

                    <div className="row row-height">
                        <div className="col-auto round-wrapper p-3 d-none d-md-block">
                            <div className="round bolded-text">4</div>
                        </div>
                        <div className="col transaction-wrapper mt-2 m-md-0">
                            <Row className="justify-content-between first">
                                <Col xs="auto bolded-text-15">01 Nov 2021</Col>
                                <Col xs="auto">View NFT: 23423</Col>
                            </Row>
                            <Row className="second">
                                <Col lg={3} className="img-desc-col">
                                    <div className="d-flex">
                                        <img src={taboo} alt="logo"></img>
                                        <p>
                                            17 JLN PJS 11/1 TAMAN BANDAR SUNWAY
                                            Petaling Jay, Petaling Jaya
                                        </p>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <small>Paid</small>
                                    <div className="bolded-text">
                                        <b>$10.00</b>
                                    </div>
                                </Col>
                                <Col lg={3}>
                                    <small>
                                        Transaction Hash ( Taboo ): 2234234
                                    </small>
                                    <br />
                                    <small>
                                        Transaction Hash ( Taboo ): 2234234
                                    </small>
                                </Col>
                                <Col lg={3}>
                                    <small>Status</small>
                                    <br />
                                    <Button className="success-btn-sm">
                                        Paid
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Container>
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="auto">
                            <Button className="load-btn">Load More...</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Alltransactions;
