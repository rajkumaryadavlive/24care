import { useEffect, useState } from "react";
import { Col, Container, Form, Row, Table,Button } from 'react-bootstrap';
import SiteNav from "../../components/layouts/SiteNav";
import editIcon from "../../assets/admin/table/edit.png";
import deleteIcon from "../../assets/admin/table/delete.png";

function RateList() {
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
                    <div className="admin-header">
                        <div className="me-2">
                        Rate List
                        </div>
                        <Button className="admin-primary-btn">+ Add Rate List</Button>
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
                    <div className="admin-table-wrapper">
                        <Table striped hover variant="dark">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>INTEREST RATE</th>
                                    <th>DATE</th>
                                    <th>ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>16% Yearly</td>
                                    <td>2021-08-11 11:45pm</td>
                                    <td>
                                        <div className="table-action">
                                            <div className="tabel-edit me-2">
                                                <img src={editIcon}></img>
                                            </div>
                                            <div className="tabel-delete">
                                                <img src={deleteIcon}></img>
                                            </div>
                                        </div>
                                    </td>
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
    )
}

export default RateList;
