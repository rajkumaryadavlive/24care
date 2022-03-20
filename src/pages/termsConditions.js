import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

function TermsCondition() {
    return (
        <div className="page-wrapper">
            <div className="page-header mb-5">
                <Header></Header>
                <Container>
                    <Row className="justify-content-between m-3 mt-5">
                        <Col xs="auto">
                            <h4>Terms & Conditions</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="page-body" fluid>
                <Container className="list community expand">
                    <h5 className="mb-5">Effective : 01 April 2021</h5>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. <br></br> <br></br> It has survived not
                    only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged.<br></br>{" "}
                    <br></br> It was popularised in the 1960s with the release
                    of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.<br></br>{" "}
                    <br></br> Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book.<br></br> <br></br> It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged. It
                    was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.<br></br> <br></br> Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry.<br></br> <br></br> Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.<br></br> <br></br> It was
                    popularised in the 1960s with the release of Letraset sheets
                    containing Lorem Ipsum passages, and more recently with
                    desktop publishing software like Aldus PageMaker including
                    versions of Lorem Ipsum.
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default TermsCondition;
