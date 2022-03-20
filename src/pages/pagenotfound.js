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
const url = "http://3.137.144.14:3000/explore";

function Pagenotfound() {
    return (
        <div className="page-wrapper">
            <div className="page-header">
                <Header></Header>
            </div>
            <Container className="page-body explore" fluid>
                <Container>
                    <Row className=" justify-content-between m-3 mt-1 mt-md-5 displayinit">
                        <Col className="explore-title" md="12" lg="auto">
                            <p className="oops">Oops!</p>
                        </Col>
                    </Row>

                    <Row className=" justify-content-between m-3 mt-1 mt-md-5 displayinit">
                        <Col className="explore-title" md="12" lg="auto">
                            <h1>SORRY! page not found</h1>
                        </Col>
                    </Row>
                    <Row className=" justify-content-between m-3 mt-1 mt-md-5 displayinit">
                        <Col className="explore-title" md="12" lg="auto">
                            <h2>The page you requested could not be found!</h2>
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
export default Pagenotfound;
