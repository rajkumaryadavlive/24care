import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import SiteNav from "../../components/layouts/SiteNav";

function CreatorPasswordReset() {
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header">Change password</div>
                    <div className="admin-body wallet-address">
                        <Row className="mb-4">
                            <Col className="mb-2" xs="auto" lg={6}>
                                <Form.Label for="password">
                                    New Password
                                </Form.Label>
                                <input
                                    type="password"
                                    name="password"
                                    className="customInputField"
                                    id="confirm_password"
                                    placeholder="Enter New Password"
                                />
                            </Col>
                            <Col className="mb-2" xs="auto" lg={6}>
                                <Form.Label for="confirm_password">
                                    Confirm Password
                                </Form.Label>
                                <input
                                    type="password"
                                    name="confirm_password"
                                    className="customInputField"
                                    id="confirm_password"
                                    placeholder="Enter Confirm Password"
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

export default CreatorPasswordReset;
