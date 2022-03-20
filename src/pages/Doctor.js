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
import { LoaderContext } from "../context";
const url = "http://3.129.13.65:3000/explore";

function Doctor() {
    // const [loading, setLoading] = useState(true);
    const [, dispatch] = React.useContext(LoaderContext);

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

    const [data, setData] = useState({
        list: [],
        total: "",
        loading: true,
    });
    const [currentPage, setCurretPage] = useState(1);

    const getData = async (page, limit = 60, tier = "1 Tier") => {
        const res = await axios.post(url, { page, limit, tier });
        if (res.status === 200) {
            setData({
                list: [...res.data.data],
                total: res.data.total,
                loading: false,
            });
        }
    };

    useEffect(() => {
        setData((prev) => ({ ...prev, list: [], loading: true }));
        getData(currentPage, 60);
    }, [currentPage]);

    console.log(data);

    const { list, total, loading } = data;
    const pages = (() => {
        if (total) {
            return Array.from(
                { length: Math.ceil(total / 60) },
                (_, i) => i + 1
            );
        }
    })();
    const nextPage = () => {
        setCurretPage((oldPage) => {
            let nextPage = oldPage + 1;
            if (nextPage > pages.length) {
                nextPage = 1;
            }
            return nextPage;
        });
    };
    const prevPage = () => {
        setCurretPage((oldPage) => {
            let prevPage = oldPage - 1;
            if (prevPage < 1) {
                prevPage = pages.length;
            }
            return prevPage;
        });
    };

    const handlePage = (page) => setCurretPage(page);

    console.log(pages);
    const exploreCard = (
        <div className="explore-card my-4">
            <Image src={taboo}></Image>
            <div className="explore-card-content">
                <h2>Modal 1</h2>
                <p className="explore-card-subtitle">
                    Lorum ipsum lorum ipsum lorum ipsum lorum ipsum
                </p>
                <Row className="justify-content-between">
                    <Col xs className="align-self-center explore-card-subtitle">
                        $10
                    </Col>
                    <Col xs="auto">
                        <Button className="explore-card-btn">Buy Now</Button>
                    </Col>
                </Row>
            </div>
        </div>
    );

    return (
        <div className="page-wrapper">
            <div className="page-header">
                <Header></Header>
            </div>
            <Container className="page-body explore" fluid>
                <Container>
                    <Row className=" justify-content-between m-3 mt-1 mt-md-5">
                        <Col className="explore-title" md="12" lg="auto">
                            <h3>Explore</h3>
                        </Col>
                        <Col md="12" lg="auto">
                            <Row className="justify-content-between">
                                <Col
                                    className="explore-title"
                                    xs={12}
                                    md="auto"
                                >
                                    <Link
                                        className="explore-back me-3"
                                        to="/adultstars"
                                    >
                                        Back to Adult Stars
                                    </Link>
                                </Col>
                                <Col xs={12} md="auto">
                                    <DropdownButton
                                        id="dropdown-basic-button"
                                        title="Sort by Price"
                                    >
                                        <Dropdown.Item href="#/action-1">
                                            Sort by Price
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            Sort by Price
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">
                                            Sort by Price
                                        </Dropdown.Item>
                                    </DropdownButton>
                                </Col>
                            </Row>
                            {/* <Button className="explore-sort-btn">Sort by Price</Button> */}
                        </Col>
                    </Row>
                </Container>
                <Container className="list">
                    <div>
                        <Row className="justify-content-between">
                            {/* <Col lg={6} xl={4}>
                {exploreCard}
              </Col>
              <Col lg={6} xl={4}>
                {exploreCard}
              </Col>
              <Col lg={6} xl={4}>
                {exploreCard}
              </Col>
              <Col lg={6} xl={4}>
                {exploreCard}
              </Col>
              <Col lg={6} xl={4}>
                {exploreCard}
              </Col>
              <Col lg={6} xl={4}>
                {exploreCard}
              </Col> */}
                            {loading && (
                                <div className="justify-content-center">
                                    <Spinner animation="border" role="status">
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </Spinner>
                                </div>
                            )}
                            {list.length > 0 &&
                                list.map((item, i) => (
                                    <Col key={item._id} lg={6} xl={4}>
                                        <div
                                            className="explore-card my-4"
                                            style={{
                                                backgroundImage: `url(${item.image})`,
                                            }}
                                        >
                                            <Image src={taboo}></Image>
                                            <div className="explore-card-content">
                                                <h2>{item.name}</h2>
                                                <p className="explore-card-subtitle">
                                                    Lorum ipsum lorum ipsum
                                                    lorum ipsum lorum ipsum
                                                </p>
                                                <Row className="justify-content-between">
                                                    <Col
                                                        xs
                                                        className="align-self-center explore-card-subtitle"
                                                    >
                                                        ${item.price}
                                                    </Col>
                                                    <Col xs="auto">
                                                        <Button className="explore-card-btn">
                                                            Buy Now
                                                        </Button>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                ))}
                        </Row>
                        <Row className="justify-content-center">
                            <div className="btn-container">
                                <button className="prev-btn" onClick={prevPage}>
                                    prev
                                </button>
                                {pages &&
                                    pages.map((index) => (
                                        <button
                                            key={index}
                                            className={`page-btn ${
                                                index === currentPage
                                                    ? "active-btn"
                                                    : null
                                            }`}
                                            onClick={() => handlePage(index)}
                                        >
                                            {index}
                                        </button>
                                    ))}
                                <button className="next-btn" onClick={nextPage}>
                                    next
                                </button>
                            </div>
                        </Row>
                    </div>
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Doctor;
