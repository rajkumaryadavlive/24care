import React from "react";
import { Col, Container, Form, InputGroup, Row,Button } from "react-bootstrap";
import SiteNav from "../../components/layouts/SiteNav";
import { Editor } from "@tinymce/tinymce-react";

function TermsAndConditions() {
    const editorRef = React.useRef(null);
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header">Terms and conditions</div>

                    <div className="add-content-wrapper flex-wrap">
                        <div className="add-content-detail flex-grow-1">
                            <div className="wallet-address">
                                <Row>
                                    <Col>
                                        <Form>
                                            <div>
                                                <Form.Label for="name">
                                                    Title
                                                </Form.Label>
                                                <div>
                                                    <InputGroup className="custom-input-group">
                                                        <Form.Control
                                                            type="text"
                                                            placeholder="Enter Title ..."
                                                            value="Terms and conditions"
                                                            required
                                                        />
                                                    </InputGroup>
                                                </div>
                                            </div>
                                        </Form>
                                    </Col>
                                    <Col></Col>
                                </Row>
                                <Row>
                                    <div style={{ marginTop: "3em" }}>
                                        <Form.Label>Content</Form.Label>
                                        <Editor
                                            apiKey="rjb4r92bef9dmwcwruh19jkr3jogidkivd825tcnq82dhsq4"
                                            onInit={(evt, editor) =>
                                                (editorRef.current = editor)
                                            }
                                            initialValue=""
                                            init={{
                                                height: 500,
                                                menubar: false,
                                                plugins: [
                                                    "advlist autolink lists link image charmap print preview anchor",
                                                    "searchreplace visualblocks code fullscreen",
                                                    "insertdatetime media table paste code help wordcount",
                                                ],
                                                toolbar:
                                                    "undo redo | formatselect | " +
                                                    "bold italic backcolor | alignleft aligncenter " +
                                                    "alignright alignjustify | bullist numlist outdent indent | " +
                                                    "removeformat | help",
                                                content_style:
                                                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; background: #1c1c20; } body:focus { background: #343437; }",
                                                skin: "oxide-dark",
                                                content_css: "dark",
                                            }}
                                        />
                                    </div>
                                </Row>
                                <Row className="justify-content-center mt-3 mb-4">
                                    <Col xs="auto">
                                        <Button className="admin-secondry-btn">Cancel</Button>
                                    </Col>
                                    <Col xs="auto">
                                        <Button className="admin-primary-btn">Update</Button>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default TermsAndConditions;
