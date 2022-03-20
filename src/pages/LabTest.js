import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import lock from "../assets/adult/lock.png";
import taboo from "../assets/adult/taboo-icon.png";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { LoaderContext } from "../context";
import { AdulStarPopup, AdultStarPopup } from "../components/shared";

function LabTest() {
    const [, dispatch] = React.useContext(LoaderContext);
    const [popupStatus, updatePopupStatus] = React.useState(false);

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

    const adultstarCard = (
        <div className="adultstar-card my-4">
            <Image src={taboo} alt="logo"></Image>
            <div className="adultstar-card-content pb-3">
                <div className="d-flex justify-content-between">
                    <h2>Modal 1</h2>
                    <div
                        className="lock"
                        onClick={() => updatePopupStatus(!popupStatus)}
                    >
                        <Image src={lock} alt="logo"></Image>
                    </div>
                </div>
                <p className="explore-card-subtitle">
                    Lorum ipsum lorum ipsum lorum ipsum
                </p>
            </div>
        </div>
    );

    return (
        <div className="page-wrapper">
            <div className="page-header">
                <Header></Header>
                <Container>
                    <Row className="justify-content-between m-3 mt-5 additional-margin-top">
                        <Col md="12" lg="auto">
                            <h3>Adult Stars</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="page-body" fluid>
                <Container className="list">
                    <div>
                        <Row className="justify-content-between">
                            <Col lg={6} xl={4}>
                                {adultstarCard}
                            </Col>
                            <Col lg={6} xl={4}>
                                {adultstarCard}
                            </Col>
                            <Col lg={6} xl={4}>
                                {adultstarCard}
                            </Col>
                            <Col lg={6} xl={4}>
                                {adultstarCard}
                            </Col>
                            <Col lg={6} xl={4}>
                                {adultstarCard}
                            </Col>
                            <Col lg={6} xl={4}>
                                {adultstarCard}
                            </Col>
                        </Row>
                    </div>
                </Container>
                <AdultStarPopup
                    display={popupStatus}
                    closeCall={() => updatePopupStatus(!popupStatus)}
                />
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default LabTest;
