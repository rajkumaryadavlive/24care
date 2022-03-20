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
import right from "../../assets/right-tick.png";
import search from "../../assets/search.png";
import SiteNav from "../../components/layouts/SiteNav";

function AdminDashboard() {
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header">Dashboard</div>
                    <section>
                        <Row>
                            <Col className="m-1">
                                <div className="creator-dashboard-card-first bg-img dash-total-content">
                                    <div className="title">254</div>
                                    <div className="content">
                                        Total Contents
                                    </div>
                                </div>
                            </Col>
                            <Col className="m-1">
                                <div className="creator-dashboard-card-first bg-img contact-sale">
                                    <div className="title">254</div>
                                    <div className="content">
                                        Content on Sales
                                    </div>
                                </div>
                            </Col>
                            <Col className="m-1">
                                <div className="creator-dashboard-card-first bg-img pending-approval">
                                    <div className="title">254</div>
                                    <div className="content">
                                        Pending Approval
                                    </div>
                                </div>
                            </Col>
                            <Col className="m-1">
                                <div className="creator-dashboard-card-first bg-img total-earned">
                                    <div className="title">254</div>
                                    <div className="content">Taboo Earned</div>
                                </div>
                            </Col>
                            <Col className="m-1">
                                <div className="creator-dashboard-card-first bg-img earned-amt">
                                    <div className="title">$ 254</div>
                                    <div className="content">
                                        Earned Amount in $
                                    </div>
                                </div>
                            </Col>
                            <Col className="m-1">
                                <div className="creator-dashboard-card-first bg-img total-creators">
                                    <div className="title">3</div>
                                    <div className="content">
                                        Total Creators
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </section>

                    <section className="dropdown mt-5">
                        <Row className="fullwidth m-0">
                            <Col xs="auto" sm={6} className="d-flex fullwidth p-0">
                                <div className="mx-2 d-flex ">
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        title="All Categories"
                                    >
                                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <div className="mx-2 d-flex ">
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        title="All Price"
                                    >
                                        <Dropdown.Item href="#/action-1"></Dropdown.Item>
                                    </DropdownButton>
                                </div>
                            </Col>
                            <Col xs="auto" className="mob-margin2">
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
                            className="list flex-nowrap mob-kycrow mob-textright"
                            style={{
                                flexDirection: "row",
                                overflowX: "auto",
                                alignItems: "center",
                            }}
                        >
                            <Col xs="auto">
                                <img className="list-img mob-padding10" src={adult}></img>
                            </Col>
                            <Col className="align-self-center mob-padding10">
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
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="list-sale">
                                    <div className="desc-mute">Sale</div>
                                    <div>Yes</div>
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="list-sale">
                                    <div className="desc-mute">
                                        Available Tier
                                    </div>
                                    <div>1 Tier</div>
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="list-sale">
                                    <div className="desc-mute">Basic Price</div>
                                    <div>$ 10.00</div>
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="d-flex">
                                    <div className="success-btn">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="wrong-btn">
                                        <i className="fa fa-times"></i>
                                    </div>
                                    <div className="edit-btn">
                                        <i className="fa fa-pencil"></i>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row
                            className="list flex-nowrap mob-kycrow mob-textright"
                            style={{
                                flexDirection: "row",
                                overflowX: "auto",
                                alignItems: "center",
                            }}
                        >
                            <Col xs="auto">
                                <img className="list-img mob-padding10" src={adult}></img>
                            </Col>
                            <Col className="align-self-center mob-padding10">
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
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="list-sale">
                                    <div className="desc-mute">Sale</div>
                                    <div>Yes</div>
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="list-sale">
                                    <div className="desc-mute">
                                        Available Tier
                                    </div>
                                    <div>1 Tier</div>
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="list-sale">
                                    <div className="desc-mute">Basic Price</div>
                                    <div>$ 10.00</div>
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="d-flex">
                                    <div className="success-btn">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="wrong-btn">
                                        <i className="fa fa-times"></i>
                                    </div>
                                    <div className="edit-btn">
                                        <i className="fa fa-pencil"></i>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row
                            className="list flex-nowrap mob-kycrow mob-textright"
                            style={{
                                flexDirection: "row",
                                overflowX: "auto",
                                alignItems: "center",
                            }}
                        >
                            <Col xs="auto">
                                <img className="list-img mob-padding10" src={adult}></img>
                            </Col>
                            <Col className="align-self-center mob-padding10">
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
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="list-sale">
                                    <div className="desc-mute">Sale</div>
                                    <div>Yes</div>
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="list-sale">
                                    <div className="desc-mute">
                                        Available Tier
                                    </div>
                                    <div>1 Tier</div>
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="list-sale">
                                    <div className="desc-mute">Basic Price</div>
                                    <div>$ 10.00</div>
                                </div>
                            </Col>
                            <Col className="align-self-center mob-padding10">
                                <div className="d-flex">
                                    <div className="success-btn">
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="wrong-btn">
                                        <i className="fa fa-times"></i>
                                    </div>
                                    <div className="edit-btn">
                                        <i className="fa fa-pencil"></i>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    
                    </section>
                </div>
            </div>
        </Container>
    );
}

export default AdminDashboard;
