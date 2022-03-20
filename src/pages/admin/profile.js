import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import SiteNav from "../../components/layouts/SiteNav";

function Profile() {
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header">Edit Profile</div>
                    <div className="admin-body wallet-address">
                        <div className="mb-4">
                            <h4>Personal Information</h4>
                        </div>
                        <Row>
                            <Col className="mb-2" lg={6} md={12}>
                                <Form.Label for="name">Name</Form.Label>
                                <input
                                    type="text"
                                    name="name"
                                    className="customInputField"
                                    id="name"
                                    placeholder="Enter Name"
                                />
                            </Col>
                            <Col className="mb-2" lg={6} md={12}>
                                <Form.Label for="phone">Phone</Form.Label>
                                <input
                                    type="text"
                                    name="phone"
                                    className="customInputField"
                                    id="phone"
                                    placeholder="Enter Phone"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <div>
                                <Form.Label for="bio">Bio</Form.Label>
                                <textarea
                                    className="customInputField"
                                    id="bio"
                                ></textarea>
                            </div>
                        </Row>
                        <div className="my-4">
                            <h4>Social Links</h4>
                        </div>
                        <Row>
                            <Col className="mb-2" lg={6} md={12}>
                                <Form.Label for="instagram">
                                    Instagram
                                </Form.Label>
                                <input
                                    type="text"
                                    name="instagram"
                                    className="customInputField"
                                    id="instagram"
                                    placeholder="Enter Instagram username"
                                />
                            </Col>
                            <Col className="mb-2" lg={6} md={12}>
                                <Form.Label for="phone">Twitter</Form.Label>
                                <input
                                    type="text"
                                    name="twitter"
                                    className="customInputField"
                                    id="twitter"
                                    placeholder="Enter Twitter username"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="mb-2">
                                <Form.Label for="website">Website</Form.Label>
                                <input
                                    type="text"
                                    name="website"
                                    className="customInputField"
                                    id="website"
                                    placeholder="Enter Website username"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={0}></Col>
                            <Col
                                className="right-align d-flex justify-content-end mob-directcolumn"
                                sm={12}
                            >
                                <Button
                                    className="secondry-btn custom-secondary-design mr-4 mob-margin2"
                                    type="submit"
                                >
                                    Clear
                                </Button>
                                <Button className="primary-btn custom-primary-design mob-margin2">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Profile;
