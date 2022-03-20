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
                            <p>Models/Creators List</p>
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
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>STATUS</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Marie knight</td>
                                    <td>mknight@gmail.com</td>
                                    <td>Active</td>
                                    <td>
                                        <span className="deactivate">
                                            Deactivate
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Marie knight</td>
                                    <td>mknight@gmail.com</td>
                                    <td>Active</td>
                                    <td>
                                        <span className="deactivate">
                                            Deactivate
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Marie knight</td>
                                    <td>mknight@gmail.com</td>
                                    <td>Active</td>
                                    <td>
                                        <span className="deactivate">
                                            Deactivate
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Marie knight</td>
                                    <td>mknight@gmail.com</td>
                                    <td>Active</td>
                                    <td>
                                        <span className="activate">
                                            Deactivate
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Marie knight</td>
                                    <td>mknight@gmail.com</td>
                                    <td>Active</td>
                                    <td>
                                        <span className="deactivate">
                                            Deactivate
                                        </span>
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

export default ManageOffers;
