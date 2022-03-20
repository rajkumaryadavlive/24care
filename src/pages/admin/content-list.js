import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col, Form, Button } from "react-bootstrap";
import SiteNav from "../../components/layouts/SiteNav";
import BaseImage from "../../assets/admin/children.jpeg";

function ContentList() {
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
            return Array.from(
                { length: Math.ceil(total / 5) },
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
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header orders flex-wrap">
                        <div className="d-flex flex-nowrap align-items-baseline">
                            <p>Content list</p>
                            <Button className="primary-btn custom-primary-design ml-2 add-content">
                                <i className="fa fa-plus"></i>{" "}
                                <span>Add Content</span>
                            </Button>
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
                        <Col
                            xs="auto"
                            className="d-flex align-items-center add-content-value"
                        >
                            <div>Show</div>
                            <Form.Select className="pageCountSelect">
                                <option>5</option>
                                <option>25</option>
                            </Form.Select>
                            <div> entries</div>
                        </Col>
                        <Col xs="auto">
                            <div className="search">
                                <Form.Control
                                    className="add-content-input"
                                    type="text"
                                    placeholder="Search..."
                                />
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
                                    <th>IMAGE</th>
                                    <th>CONTENT</th>
                                    <th>CATEGORY</th>
                                    <th>FOR SALES</th>
                                    <th>BASIC PRICE</th>
                                    <th>STATUS</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src={BaseImage} />
                                    </td>
                                    <td>Modal Name</td>
                                    <td>Age</td>
                                    <td>yes</td>
                                    <td>10</td>
                                    <td>Approved</td>
                                    <td>
                                        <div className="d-flex justify-content-center">
                                            <div className="edit-icon mr-2">
                                                <i className="fa fa-pencil"></i>
                                            </div>
                                            <div className="edit-icon">
                                                <i className="fa fa-trash"></i>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        <img src={BaseImage} />
                                    </td>
                                    <td>Modal Name</td>
                                    <td>Age</td>
                                    <td>yes</td>
                                    <td>10</td>
                                    <td>Approved</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>
                                        <img src={BaseImage} />
                                    </td>
                                    <td>Modal Name</td>
                                    <td>Age</td>
                                    <td>yes</td>
                                    <td>10</td>
                                    <td>Approved</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>
                                        <img src={BaseImage} />
                                    </td>
                                    <td>Modal Name</td>
                                    <td>Age</td>
                                    <td>yes</td>
                                    <td>10</td>
                                    <td>Approved</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>
                                        <img src={BaseImage} />
                                    </td>
                                    <td>Modal Name</td>
                                    <td>Age</td>
                                    <td>yes</td>
                                    <td>10</td>
                                    <td>Approved</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>
                                        <img src={BaseImage} />
                                    </td>
                                    <td>Modal Name</td>
                                    <td>Age</td>
                                    <td>yes</td>
                                    <td>10</td>
                                    <td>Approved</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>
                                        <img src={BaseImage} />
                                    </td>
                                    <td>Modal Name</td>
                                    <td>Age</td>
                                    <td>yes</td>
                                    <td>10</td>
                                    <td>Approved</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>
                                        <img src={BaseImage} />
                                    </td>
                                    <td>Modal Name</td>
                                    <td>Age</td>
                                    <td>yes</td>
                                    <td>10</td>
                                    <td>Approved</td>
                                    <td></td>
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
                        </Col>
                    </Row>
                </div>
            </div>
        </Container>
    );
}

export default ContentList;
