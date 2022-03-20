import React from "react";
import { Table, Container } from "react-bootstrap";
import SiteNav from "../../components/layouts/SiteNav";

function ManageOffers() {
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
                        <div>
                            <input
                                type="text"
                                name="search"
                                className="customInputField"
                                id="search"
                                placeholder="Search..."
                            />
                        </div>
                    </div>
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
                </div>
            </div>
        </Container>
    );
}

export default ManageOffers;
