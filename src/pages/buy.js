import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import taboo from "../assets/adult/taboo-icon.png";
import bnb from "../assets/bnb-icon.png";
import down from "../assets/buy-transfer/down.png";
import up from "../assets/buy-transfer/up.png";
import footer from "../assets/footer/footer-logo.png";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { LoaderContext } from "../context";

function Buy() {
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
                    <Row className="justify-content-between m-3 mt-5 additional-margin-top">
                        <Col xs="auto">
                            <h3>Buy</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="page-body" fluid>
                <Container className="list p-relative background-none">
                    <div>
                        <Row className="justify-content-between">
                            <Col>
                                <div className="buy-card">
                                    <div className="content-details-md mb-3">
                                        Swap From
                                    </div>
                                    <div className="logo mb-3">
                                        <img
                                            className="mr-2"
                                            src={bnb}
                                            alt="logo"
                                        ></img>{" "}
                                        &nbsp;
                                        <h3>BNP</h3>
                                    </div>
                                    <input
                                        className="customInputField"
                                        type="text"
                                        placeholder="0.000000"
                                    />
                                </div>
                            </Col>
                            <Col>
                                <div className="buy-card buy-card-mobi">
                                    <div className="content-details-md mb-3">
                                        Swap To
                                    </div>
                                    <div className="logo mb-3">
                                        <img
                                            className="mr-2"
                                            src={taboo}
                                            alt="logo"
                                        ></img>{" "}
                                        &nbsp;
                                        <img
                                            className="buy-logo"
                                            src={footer}
                                            alt="logo"
                                        ></img>
                                    </div>
                                    <input
                                        className="customInputField"
                                        type="text"
                                        placeholder="TABOO"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <div className="transfer">
                            <img src={up} alt="logo"></img>
                            <img src={down} alt="logo"></img>
                        </div>
                        <div className="my-3">
                            <p className="content-details-mute">
                                Please wait for while to receive Taboo and check
                                your wallet after confirmation.
                            </p>
                        </div>
                        <Button className="primary-btn custom">BUY NOW</Button>
                    </div>
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Buy;
