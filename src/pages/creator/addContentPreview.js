import React from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import addContent from "../../assets/creator/add-content-img.png";
import SiteNav from "../../components/layouts/SiteNav";

function AddContentPreview() {
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header">
                        Add Content -> Preview
                    </div>

                    <div className="add-content-wrapper">
                        <Row>
                            <Col lg={4} className="mr-inherit">
                                <div className="add-content-img">
                                    <p className="add-content-label">Modal Images</p>
                                    <div className="image-card-preview">
                                        <object data={addContent} className="widthauto"></object>
                                    </div>
                                    <div className="image-card-preview">
                                        <object data={addContent} className="widthauto"></object>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={8} className="ml-inherit">
                                <div className="add-content-detail">
                                    <div className="admin-header mob-mt0">
                                        <p className="mob-mt3">Basic Details</p>
                                    </div>

                                    <Row>
                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    No of Copies
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    10
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    No of Copies for Sales
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    250
                                                </Col>
                                            </Row>

                                        </Col>
                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    Display Name
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    Modal Name
                                                </Col>
                                            </Row>

                                        </Col>
                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    Category
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    Age
                                                </Col>
                                            </Row>

                                        </Col>

                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    For Sale
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    Yes
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    Content Availability
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    Teir 1
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    Contract Type
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    ECR 115
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <hr></hr>

                                    <div className="admin-header">
                                        Payment Details
                                    </div>

                                    <Row>
                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    Basic Price (Taboo)
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    10.00
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    Platform Fee (15%)
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    2
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    You get (Taboo)
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    2
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    Basic Price (USD)
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    $20.99
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    Platform Fee (15%)
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    2
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    You get (USD)
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    2
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                    Payment In Taboo
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    Accepted
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xs={6}>
                                            <Row className="my-3">
                                                <Col xs={6} className="add-content-label">
                                                Meta Tag
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                    Modal Name
                                                </Col>
                                            </Row>
                                        </Col>

                                        <Col xs={12}>
                                            <Row className="my-3">
                                                <Col xs={3} className="add-content-label">
                                                    Description (Optional)
                                                </Col>
                                                <Col xs={6} className="add-content-value">
                                                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center mb-4">
                                        <Col xs="auto">
                                            <Button className="admin-primary-btn">Submit</Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                            
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AddContentPreview;