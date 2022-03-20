import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { LoaderContext } from "../context";

function About() {
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
    return (
        <div className="page-wrapper">
            <div className="page-header mb-5">
                <Header></Header>
                <Container>
                    <Row className="justify-content-between m-3 mt-5 additional-margin-top">
                        <Col xs="auto">
                            <h3>About</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="page-body" fluid>
                <Container className="list community"></Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default About;
