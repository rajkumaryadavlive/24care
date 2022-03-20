import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SiteNav from "../../components/layouts/SiteNav";
import Licence from "../../assets/admin/driving_licence.png";
import Aaadhar from "../../assets/admin/aadhaar.png";

function Kyc() {
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header">KYC Status</div>
                    <div className="admin-body mb-4">
                        <Row
                            style={{
                                flexDirection: "row",
                                overflowX: "auto",
                                alignItems: "center",
                            }}
                            className="flex-nowrap justify-content-between mob-kycrow"
                        >
                            <Col className="mb-2" xs="auto">
                                <img src={Aaadhar} />
                            </Col>
                            <Col className="mb-2" xs="auto">
                                <p className="dark-white">John Martin</p>
                                <p>DOB: 19 Nov 1987</p>
                            </Col>
                            <Col className="mb-2" xs="auto">
                                <p>Aadhaar</p>
                                <p className="dark-white">2342 2343 2332</p>
                            </Col>
                            <Col className="mb-2" xs="auto">
                                <p>Status</p>
                                <label className="status-rejected">
                                    Rejected
                                </label>
                            </Col>
                            <Col className="mb-2 d-flex mob-mt3" lg={2} md="12">
                                <div className="edit-icon mr-2">
                                    <i className="fa fa-pencil"></i>
                                </div>
                                <div className="edit-icon">
                                    <i className="fa fa-trash"></i>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="admin-body">
                        <Row
                            style={{
                                flexDirection: "row",
                                overflowX: "auto",
                                alignItems: "center",
                            }}
                            className="flex-nowrap justify-content-between mob-kycrow"
                        >
                            <Col className="mb-2"  xs="auto">
                                <img src={Licence} />
                            </Col>
                            <Col className="mb-2"  xs="auto">
                                <p className="dark-white">John Martin</p>
                                <p>DOB: 19 Nov 1987</p>
                            </Col>
                            <Col className="mb-2"  xs="auto">
                                <p>Driving licence</p>
                                <p className="dark-white">2342 2343 2332</p>
                            </Col>
                            <Col className="mb-2"  xs="auto">
                                <p>Status</p>
                                <label className="status-approved">
                                    Approved
                                </label>
                            </Col>
                            <Col className="mb-2 d-flex mob-mt3" lg={2} md="12">
                                <div className="edit-icon mr-2">
                                    <i className="fa fa-pencil"></i>
                                </div>
                                <div className="edit-icon">
                                    <i className="fa fa-trash"></i>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Kyc;
