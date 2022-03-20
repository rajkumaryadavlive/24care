import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { LoaderContext } from "../context";

function AllStake() {
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
                    <Row className="justify-content-between m-3 mt-5">
                        <Col xs="auto">
                            <h3>All Stakes</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className="page-body explore-details" fluid>
                <Container className="list p-relative table-responsive background-none all-stake">
                    <Table striped borderless hover variant="dark">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Date</th>
                                <th>Deposit</th>
                                <th>Current Balance</th>
                                <th>Interest Earned</th>
                                <th>Interest Rate</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>01 Nov 2021</td>
                                <td>$20.00</td>
                                <td>$2,000.00</td>
                                <td>$30.00</td>
                                <td>$5.00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>01 Nov 2021</td>
                                <td>$20.00</td>
                                <td>$2,000.00</td>
                                <td>$30.00</td>
                                <td>$5.00</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>01 Nov 2021</td>
                                <td>$20.00</td>
                                <td>$2,000.00</td>
                                <td>$30.00</td>
                                <td>$5.00</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>01 Nov 2021</td>
                                <td>$20.00</td>
                                <td>$2,000.00</td>
                                <td>$30.00</td>
                                <td>$5.00</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>01 Nov 2021</td>
                                <td>$20.00</td>
                                <td>$2,000.00</td>
                                <td>$30.00</td>
                                <td>$5.00</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>01 Nov 2021</td>
                                <td>$20.00</td>
                                <td>$2,000.00</td>
                                <td>$30.00</td>
                                <td>$5.00</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>01 Nov 2021</td>
                                <td>$20.00</td>
                                <td>$2,000.00</td>
                                <td>$30.00</td>
                                <td>$5.00</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>01 Nov 2021</td>
                                <td>$20.00</td>
                                <td>$2,000.00</td>
                                <td>$30.00</td>
                                <td>$5.00</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default AllStake;
