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

function AddCategory() {
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header">Add Category</div>

                    <div className="add-content-wrapper flex-wrap">
                        <div className="add-content-img flex-grow-1">
                            <p className="add-content-label">Modal Images</p>
                            <p className="img-types">
                                . PNG, JPG, GIF, WEBP, or MP4{" "}
                                <span className="ms-4">Maximum 200MB</span>
                            </p>
                            <div className="image-card">
                                <img src={addContent}></img>
                            </div>
                            
                            <div className="text-center mob-m30">
                                <Button className="primary-btn btn-primary custom-primary-design">
                                    Upload
                                </Button>
                            </div>
                        </div>
                        <div className="add-content-detail flex-grow-1">
                            <div className="wallet-address">
                                <Form>
                                    <div>
                                        <Form.Label for="name">Name</Form.Label>
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <InputGroup className="custom-input-group">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Enter Name ..."
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

export default AddCategory;
