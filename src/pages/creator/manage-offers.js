import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Table } from 'react-bootstrap';
import SiteNav from "../../components/layouts/SiteNav";

function CreatorManageOffers() {

    const [data, setData] = useState({
        list: [],
        total: "",
        loading: true,
    });
    const [currentPage, setCurretPage] = useState(1);

    const getData = async (page, limit = 5) => {
        setData({
            list: [{ cnt: 1, email: "test@gmail.com" }],
            total: 20,
            loading: false,
        });
    };

    useEffect(() => {
        setData((prev) => ({ ...prev, list: [], loading: true }));
        getData(currentPage, 5);
    }, [currentPage]);

    const { list, total, loading } = data;
    const pages = (() => {
        if (total) {
            return Array.from({ length: Math.ceil(total / 5) }, (_, i) => i + 1);
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

    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header orders align-items-baseline flex-wrap">
                        <div>
                            <p>Manage Offers</p>
                        </div>
                        {/* <div>
                            <input
                                type="text"
                                name="search"
                                className="customInputField"
                                id="search"
                                placeholder="Search..."
                            />
                        </div> */}
                    </div>
                    <Row className="justify-content-between my-2">
                        <Col xs="auto" className="d-flex align-items-center add-content-value">
                            <div>Show</div>
                            <Form.Select className="pageCountSelect">
                                <option>5</option>
                                <option>25</option>
                            </Form.Select>
                            <div> entries</div>
                        </Col>
                        <Col xs="auto">
                            <div className="search">
                                <Form.Control className="add-content-input" type="text" placeholder="Search..." />
                            </div>
                        </Col>
                    </Row>
                    <div className="admin-inline-grid">
                        <Table
                            striped
                            bordered
                            hover
                            variant="dark"
                            responsive
                            borderless
                            striped
                        >
                            <thead>
                                <tr>
                                    <th>S.NO</th>
                                    <th>ADDRESS</th>
                                    <th>CONTENT NAME</th>
                                    <th>CONTENT PRICE</th>
                                    <th>OFFER PRICE</th>
                                    <th>ACTION</th>
                                    <th>STATUS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        10 JIn 3/55 Sekysn 3 pateling Jaya
                                        pateling Jaya
                                    </td>
                                    <td>3958345asdfasdf</td>
                                    <td>10</td>
                                    <td>12</td>
                                    <td>Approve</td>
                                    <td>Approved</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        10 JIn 3/55 Sekysn 3 pateling Jaya
                                        pateling Jaya
                                    </td>
                                    <td>3958345asdfasdf</td>
                                    <td>10</td>
                                    <td>12</td>
                                    <td>Approve</td>
                                    <td>Approved</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        10 JIn 3/55 Sekysn 3 pateling Jaya
                                        pateling Jaya
                                    </td>
                                    <td>3958345asdfasdf</td>
                                    <td>10</td>
                                    <td>12</td>
                                    <td>Approve</td>
                                    <td>Approved</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        10 JIn 3/55 Sekysn 3 pateling Jaya
                                        pateling Jaya
                                    </td>
                                    <td>3958-345asdfasdf</td>
                                    <td>10</td>
                                    <td>12</td>
                                    <td>Approve</td>
                                    <td>Approved</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        10 JIn 3/55 Sekysn 3 pateling Jaya
                                        pateling Jaya
                                    </td>
                                    <td>3958-345asdfasdf</td>
                                    <td>10</td>
                                    <td>12</td>
                                    <td>Approve</td>
                                    <td>Approved</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <Row className="justify-content-between">
                        <Col xs="auto" className="add-content-value">
                        Show 1 to 5 of 20
                        </Col>

                        <Col xs="auto">
                            <div className="btn-container">
                                <button className="prev-btn" onClick={prevPage}>
                                    prev
                                </button>
                                {pages &&
                                    pages.map((index) => (
                                        <button
                                            key={index}
                                            className={`page-btn ${index === currentPage ? "active-btn" : null
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
                        </Col>

                    </Row>
                </div>
            </div>
        </Container>
    );
}

export default CreatorManageOffers;
