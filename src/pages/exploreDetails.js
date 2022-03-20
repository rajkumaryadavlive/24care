import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import bnb from "../assets/bnb-icon.png";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { LoaderContext } from "../context";

function ExploreDetails() {
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
                    <Row className="justify-content-between m-3 mt-10 additional-margin-top">
                        <Col xs="auto">
                            <h3>View Details: Modal Name 1</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="page-body explore-details" fluid>
                <Container className="list p-relative">
                    <Row>
                        <Col className="login-img" sm="12" lg="2"></Col>
                        <Col className="content">
                            <h3>Modal Name 1</h3>
                            <div className="d-flex">
                                <Button className="secondry-btn-sm w-25">
                                    Age
                                </Button>
                                <Button className="secondry-btn-sm w-25">
                                    Taboo
                                </Button>
                            </div>
                            <p>
                                It has survived not only five centuries, but
                                also the leap into electronic typesetting,
                                remaining essentially unchanged. It was
                                popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing
                                software like Aldus PageMaker including versions
                                of Lorem Ipsum.
                            </p>
                            <h5>$10.00</h5>
                            <Button className="primary-btn">Buy Now</Button>
                            <div className="content-footer">
                                <div className="mr-2">Creator:</div> &nbsp;
                                <img
                                    className="mr-2 author-icon"
                                    src={bnb}
                                    alt="logo"
                                ></img>
                                &nbsp;
                                <div className="mr-2">Alex Cross</div>&nbsp;
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default ExploreDetails;
