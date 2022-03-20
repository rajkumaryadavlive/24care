import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import add from "../assets/home/Add.png";
import modal1 from "../assets/home/o.png";
import modal2 from "../assets/home/t.png";
import modal3 from "../assets/home/n.png";
import {
    default as modal4,
} from "../assets/home/h.png";

import s1 from "../assets/home/p.png"

import sell from "../assets/home/Sell.png";
import wallet from "../assets/home/Wallet.png";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { LoaderContext } from "../context";

function Home() {
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

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <div className="home-wrapper">
                <Header></Header>
                <div className="home-banner">
                    <Container className="mt-5">
                        <Row>
                            <Col xs={12} lg={7} className="home-banner-content">
                                <h1>Welcome to On24care</h1>
                                <p>
                                    This is your gateway to the finest adult
                                    content on blockchain. Inside you will find
                                    DeFi tools to increase your Taboo holdings,
                                    access exclusive content, and interact with
                                    Taboo Protocol.
                                </p>
                                <p>
                                    In additional, Feel free to browse our
                                    gallery, to your heart's content. Users can
                                    find appealing content, exclusive to our
                                    platform and carefully curated for quality.
                                    Enjoy!!!
                                </p>
                                <Button className="primary-btn me-2">
                                    <Link to="/explore">Explore</Link>
                                </Button>
                                <Button
                                    className="primary-btn"
                                    onClick={() => {
                                        dispatch({
                                            type: "SHOWLOADER",
                                            payload: true,
                                        });
                                    }}
                                >
                                    Create
                                </Button>
                            </Col>
                            <Col xs="auto" lg={6}></Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Container className="home-body mb-3" fluid>
                <Container>
                    <h1>Key Services </h1>
                    <Row>
                        <Col lg={4}>
                            <div className="home-nft">
                                <div className="nft-img">
                                    <img alt="logo" src={wallet}></img>
                                </div>
                                <div className="hft-title">
                                    <h5>Book Appointment</h5>
                                </div>
                                <p>
                                    In additional, Feel free to browse our
                                    gallery, to your heart's content. Users can
                                    find appealing content, exclusive to our
                                    platform and carefully curated for quality.
                                    Enjoy!!!
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="home-nft">
                                <div className="nft-img">
                                    <img alt="logo" src={add}></img>
                                </div>
                                <div className="hft-title">
                                    <h5>Consult Doctors</h5>
                                </div>
                                <p>
                                    In additional, Feel free to browse our
                                    gallery, to your heart's content. Users can
                                    find appealing content, exclusive to our
                                    platform and carefully curated for quality.
                                    Enjoy!!!
                                </p>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="home-nft">
                                <div className="nft-img">
                                    <img alt="logo" src={sell}></img>
                                </div>
                                <div className="hft-title">
                                    <h5>Book Lab Tests</h5>
                                </div>
                                <p>
                                    In additional, Feel free to browse our
                                    gallery, to your heart's content. Users can
                                    find appealing content, exclusive to our
                                    platform and carefully curated for quality.
                                    Enjoy!!!
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container className="mt-3 mb-5">
                    <div>
                        <h1>Top Speciality</h1>
                        <Slider {...settings}>
                            <div className="home-hot">
                                <div className="hot-img">
                                    <img alt="logo" src={modal1}></img>
                                </div>
                                <div className="hot-title">
                                    <h5>Sell your NFTs</h5>
                                </div>
                            </div>
                            <div className="home-hot">
                                <div className="hot-img">
                                    <img alt="logo" src={modal2}></img>
                                </div>
                                <div className="hot-title">
                                    <h5>Sell your NFTs</h5>
                                </div>
                            </div>
                            <div className="home-hot">
                                <div className="hot-img">
                                    <img alt="logo" src={modal3}></img>
                                </div>
                                <div className="hot-title">
                                    <h5>Sell your NFTs</h5>
                                </div>
                            </div>
                            <div className="home-hot">
                                <div className="hot-img">
                                    <img alt="logo" src={modal4}></img>
                                </div>
                                <div className="hot-title">
                                    <h5>Sell your NFTs</h5>
                                </div>
                            </div>
                            <div className="home-hot">
                                <div className="hot-img">
                                    <img alt="logo" src={modal3}></img>
                                </div>
                                <div className="hot-title">
                                    <h5>Sell your NFTs</h5>
                                </div>
                            </div>
                            <div className="home-hot">
                                <div className="hot-img">
                                    <img alt="logo" src={modal4}></img>
                                </div>
                                <div className="hot-title">
                                    <h5>Sell your NFTs</h5>
                                </div>
                            </div>
                            <div className="home-hot">
                                <div className="hot-img">
                                    <img alt="logo" src={modal3}></img>
                                </div>
                                <div className="hot-title">
                                    <h5>Sell your NFTs</h5>
                                </div>
                            </div>
                            <div className="home-hot">
                                <div className="hot-img">
                                    <img alt="logo" src={modal4}></img>
                                </div>
                                <div className="hot-title">
                                    <h5>Sell your NFTs</h5>
                                </div>
                            </div>

                            <div className="home-hot">
                                <div className="hot-img">
                                    <img alt="logo" src={s1}></img>
                                </div>
                                <div className="hot-title">
                                    <h5>Sell your NFTs</h5>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Home;
