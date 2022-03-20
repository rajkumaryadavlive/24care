import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import taboo from "../assets/adult/taboo-icon.png";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { LoaderContext } from "../context";

function Farms() {
    const [active, setActiveTab] = useState({ id: "1" });
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

    const handleTabChange = (event) => {
        setActiveTab((prevState) => ({
            ...prevState,
            id: event.target.parentNode.id,
        }));
    };

    return (
        <div className="page-wrapper">
            <div className="page-header mb-5">
                <Header></Header>
                <Container>
                    <Row className="justify-content-between m-3 mt-5">
                        <Col xs="auto">
                            <h3>Farms</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="page-body explore-details" fluid>
                <Container
                    className="list p-relative"
                    style={{ background: "transparent" }}
                >
                    <Row>
                        <Col xl={4}>
                            <div className="farms-card">
                                <img
                                    className="mb-2"
                                    src={taboo}
                                    alt="logo"
                                ></img>
                                <h3>Taboo / BNB</h3>
                                <div className="farm-subtitle">Yield Farm</div>
                                <input
                                    type="text"
                                    name="name"
                                    className="customInputField mb-2"
                                    id="name"
                                    placeholder="0.00"
                                />
                                <input
                                    type="text"
                                    name="name"
                                    className="customInputField mb-2"
                                    id="name"
                                    placeholder="0.00"
                                />
                            </div>
                        </Col>
                        <Col xl={8} className="farms-tab">
                            <Row>
                                <Col id="1">
                                    <div
                                        className={
                                            active.id === "1"
                                                ? "farm-tab active"
                                                : "farm-tab"
                                        }
                                        onClick={handleTabChange}
                                    >
                                        Deposit
                                    </div>
                                </Col>
                                <Col id="2">
                                    <div
                                        className={
                                            active.id === "2"
                                                ? "farm-tab farm-cen active"
                                                : "farm-tab farm-cen"
                                        }
                                        onClick={handleTabChange}
                                    >
                                        Withdraw
                                    </div>
                                </Col>
                                <Col id="3">
                                    <div
                                        className={
                                            active.id === "3"
                                                ? "farm-tab active"
                                                : "farm-tab"
                                        }
                                        onClick={handleTabChange}
                                    >
                                        Harvest
                                    </div>
                                </Col>
                            </Row>
                            <div className="farms-card">
                                <div className="farms-form text-align-left">
                                    <p className="content-details-mute">
                                        To earn better rewards withdraw and
                                        harvest after one day.
                                    </p>
                                    <input
                                        type="text"
                                        name="name"
                                        className="customInputField"
                                        id="name"
                                        placeholder="0.00"
                                    />
                                    <Row className="justify-content-end my-3">
                                        <Col xl="auto">
                                            <Button className="secondry-btn me-3">
                                                Submit
                                            </Button>
                                            <Button className="primary-btn">
                                                Add Liquidity
                                            </Button>
                                        </Col>
                                    </Row>
                                    <p className="content-details-mute mt-4">
                                        if you had zero LP token to deposit
                                        please firstly add liquidity on
                                        pancakeswap for BNB/TABOO Pair.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Farms;
