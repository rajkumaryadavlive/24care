import React from "react";
import { Table, Container } from "react-bootstrap";
import SiteNav from "../../components/layouts/SiteNav";

function KycManagement() {
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header orders align-items-baseline flex-wrap">
                        <div>
                            <p>KYC Management</p>
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
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>STATUS</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Marie knight</td>
                                    <td>m.knight@gmail.com</td>
                                    <td>Pending</td>
                                    <td>
                                        <div className="edit-icon ">
                                            <i className="fa fa-eye"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Marie knight</td>
                                    <td>m.knight@gmail.com</td>
                                    <td>Pending</td>
                                    <td>
                                        <div className="edit-icon ">
                                            <i className="fa fa-eye"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Marie knight</td>
                                    <td>m.knight@gmail.com</td>
                                    <td>Pending</td>
                                    <td>
                                        <div className="edit-icon ">
                                            <i className="fa fa-eye"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Marie knight</td>
                                    <td>m.knight@gmail.com</td>
                                    <td>Pending</td>
                                    <td>
                                        <div className="edit-icon ">
                                            <i className="fa fa-eye"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Marie knight</td>
                                    <td>m.knight@gmail.com</td>
                                    <td>Pending</td>
                                    <td>
                                        <div className="edit-icon ">
                                            <i className="fa fa-eye"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>3958-345asdfasdf</td>
                                    <td>asdfasdf235asdf45</td>
                                    <td>Success</td>
                                    <td>
                                        <div className="edit-icon ">
                                            <i className="fa fa-eye"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Marie knight</td>
                                    <td>m.knight@gmail.com</td>
                                    <td>Pending</td>
                                    <td>
                                        <div className="edit-icon ">
                                            <i className="fa fa-eye"></i>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Marie knight</td>
                                    <td>m.knight@gmail.com</td>
                                    <td>Pending</td>
                                    <td>
                                        <div className="edit-icon ">
                                            <i className="fa fa-eye"></i>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default KycManagement;
