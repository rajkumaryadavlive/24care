import React from "react";
import {
    Col,
    Container,
    Form,
    InputGroup,
    Row,
    DropdownButton,
    Dropdown,
    FormControl,
} from "react-bootstrap";
import SiteNav from "../../components/layouts/SiteNav";
import addContent from "../../assets/creator/add-content-img.png";
import Button from "@restart/ui/esm/Button";

function AddRate() {
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header">Add Rate</div>

                    <div className="add-content-wrapper flex-wrap">
                        <div className="add-content-detail flex-grow-1">
                            <div className="wallet-address">
                                <Form>
                                    <div>
                                        <Form.Label for="name">
                                            Interest Rate
                                        </Form.Label>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <InputGroup className="custom-input-group">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Rate ..."
                                                    required
                                                    className="border-right-0"
                                                />
                                                <InputGroup.Text className="custom-span-ss">
                                                    <Button className="primary-btn btn-primary custom-primary-design">
                                                        Submit
                                                    </Button>
                                                </InputGroup.Text>
                                            </InputGroup>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AddRate;
