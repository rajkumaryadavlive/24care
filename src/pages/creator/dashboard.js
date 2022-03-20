import React from "react";
import {
    Col,
    Container,
    Dropdown,
    DropdownButton,
    FormControl,
    InputGroup,
    Row,
} from "react-bootstrap";
import adult from "../../assets/adult/adult.png";
import search from "../../assets/search.png";
import SiteNav from "../../components/layouts/SiteNav";
import right from "../../assets/right-tick.png";

function CreatorDashboard() {
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header">Dashboard</div>
                    <section>
                        <Row className="justify-content-center justify-content-md-between">
                            <Col xs={12} md={6} lg={4} xl={3} xll={2} className="my-2">
                                <div className="creator-dashboard-card-first bg-img dash-total-content">
                                    <div className="title">254</div>
                                    <div className="content">
                                        Total Contents
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={4} xl={3} xll={2} className="my-2">
                                <div className="creator-dashboard-card-first bg-img contact-sale">
                                    <div className="title">254</div>
                                    <div className="content">
                                        Content on Sales
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={4} xl={3} xll={2} className="my-2">
                                <div className="creator-dashboard-card-first bg-img pending-approval">
                                    <div className="title">254</div>
                                    <div className="content">
                                        Pending Approval
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={4} xl={3} xll={2} className="my-2">
                                <div className="creator-dashboard-card-first bg-img total-earned">
                                    <div className="title">254</div>
                                    <div className="content">Taboo Earned</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} lg={4} xl={3} xll={2} className="my-2">
                                <div className="creator-dashboard-card-first bg-img earned-amt">
                                    <div className="title">$ 254</div>
                                    <div className="content">
                                        Earned Amount in $
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </section>

                    <section className="dropdown mt-5">
                        <Row className="justify-content-between">
                            <Col xs="auto" className="d-flex">
                                <div className="mx-2 my-2">
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        title="All Categories"
                                    >
                                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <div className="mx-2 my-2">
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        title="All Price"
                                    >
                                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </Col>
                            <Col xs="auto">
                                <InputGroup className="dashboard-search">
                                    <InputGroup.Text>
                                        <img src={search}></img>
                                    </InputGroup.Text>
                                    <FormControl
                                        placeholder="Search Here..."
                                        className="search-input"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </section>

                    <section>
                        <Row
                            className="list row-reverce-none"
                            style={{
                                flexDirection: "row",
                                overflowX: "auto",
                                alignItems: "center",
                            }}
                        >
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <img className="list-img" src={adult}></img>
                            </Col>
                            <Col xs={12} md={6} xl={3} className="align-self-center my-2">
                                <div className="list-content">
                                    <div className="title">
                                        Content New 1{" "}
                                        <span className="danger">Age 1</span>
                                    </div>
                                    <div className="desc-mute">
                                        Image type: JPG
                                    </div>
                                    <div className="desc-mute">
                                        08/11/ 2021 11:34 PM
                                    </div>
                                    <div className="status">Approved</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <div className="list-sale">
                                    <div className="desc-mute">Sale</div>
                                    <div className="bolded-text-15">Yes</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <div className="list-sale">
                                    <div className="desc-mute">
                                        Available Tier
                                    </div>
                                    <div className="bolded-text-15">1 Tier</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <div className="list-sale">
                                    <div className="desc-mute">Basic Price</div>
                                    <div className="bolded-text-15">
                                        $ 10.00
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row
                            className="list row-reverce-none"
                            style={{
                                flexDirection: "row",
                                overflowX: "auto",
                                alignItems: "center",
                            }}
                        >
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <img className="list-img" src={adult}></img>
                            </Col>
                            <Col xs={12} md={6} xl={3} className="align-self-center my-2">
                                <div className="list-content">
                                    <div className="title">
                                        Content New 1{" "}
                                        <span className="danger">Age 1</span>
                                    </div>
                                    <div className="desc-mute">
                                        Image type: JPG
                                    </div>
                                    <div className="desc-mute">
                                        08/11/ 2021 11:34 PM
                                    </div>
                                    <div className="status">Approved</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <div className="list-sale">
                                    <div className="desc-mute">Sale</div>
                                    <div className="bolded-text-15">Yes</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <div className="list-sale">
                                    <div className="desc-mute">
                                        Available Tier
                                    </div>
                                    <div className="bolded-text-15">1 Tier</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <div className="list-sale">
                                    <div className="desc-mute">Basic Price</div>
                                    <div className="bolded-text-15">
                                        $ 10.00
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row
                            className="list row-reverce-none"
                            style={{
                                flexDirection: "row",
                                overflowX: "auto",
                                alignItems: "center",
                            }}
                        >
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <img className="list-img" src={adult}></img>
                            </Col>
                            <Col xs={12} md={6} xl={3} className="align-self-center my-2">
                                <div className="list-content">
                                    <div className="title">
                                        Content New 1{" "}
                                        <span className="danger">Age 1</span>
                                    </div>
                                    <div className="desc-mute">
                                        Image type: JPG
                                    </div>
                                    <div className="desc-mute">
                                        08/11/ 2021 11:34 PM
                                    </div>
                                    <div className="status">Approved</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <div className="list-sale">
                                    <div className="desc-mute">Sale</div>
                                    <div className="bolded-text-15">Yes</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <div className="list-sale">
                                    <div className="desc-mute">
                                        Available Tier
                                    </div>
                                    <div className="bolded-text-15">1 Tier</div>
                                </div>
                            </Col>
                            <Col xs={12} md={6} xl={2} className="align-self-center my-2">
                                <div className="list-sale">
                                    <div className="desc-mute">Basic Price</div>
                                    <div className="bolded-text-15">
                                        $ 10.00
                                    </div>
                                </div>
                            </Col>
                        </Row>

                    </section >
                </div >
            </div >
        </Container >
    );
}

export default CreatorDashboard;
