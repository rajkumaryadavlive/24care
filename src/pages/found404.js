import React, { useEffect, useState } from "react";
import {
    Button,
    Col,
    Container,
    Row,
    Image,
    DropdownButton,
    Dropdown,
    Spinner,
} from "react-bootstrap";
import Header from "../components/layouts/Header";
import { Link } from "react-router-dom";
import taboo from "../assets/adult/taboo-icon.png";
import Footer from "../components/layouts/Footer";
import axios from "axios";
import notfound from "../assets/pagenotfound/404.png";
const url = "http://3.137.144.14:3000/explore";

function Found404() {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <Header></Header>
            </div>
            <Container className="page-body explore" fluid>
                <Container>
                    <Row className=" justify-content-between m-3 mt-1 mt-md-5 displayinit">
                        <Col className="explore-title">
                            <div className="oops">
                                <p>
                                    4
                                    <img
                                        src={notfound}
                                        className="not_found"
                                    ></img>
                                    4
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className=" justify-content-between m-3 mt-1 mt-md-5 displayinit">
                        <Col className="explore-title" md="12" lg="auto">
                            <h1>OOPS! page not found</h1>
                        </Col>
                    </Row>
                    <Row className=" justify-content-between m-3 mt-1 mt-md-5 displayinit">
                        <Col className="explore-title" md="12" lg="auto">
                            <h2>OOPS! page your looking for does not exist.</h2>
                        </Col>
                    </Row>
                    <Row className=" justify-content-between m-3 mt-1 mt-md-5 displayinit">
                        <Col className="explore-title" md="12" lg="auto">
                            <h2>It might have been moved or deleted.</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="text-center">
                            <Button className="primary-btn" type="submit">
                                Home
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}
export default Found404;
