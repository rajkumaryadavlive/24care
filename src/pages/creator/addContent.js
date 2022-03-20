import React, { useEffect, useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import addContent from "../../assets/creator/add-content-img.png";
import SiteNav from "../../components/layouts/SiteNav";

const Render = (props) => {
    const hiddenFileInput = useRef(null);
    const hiddenVideo = useRef(null);
    const [videoThumbailStatus, setVideoThumbailStatus] = React.useState(false);
    const processThumbnail = (e) => {
        var file = hiddenFileInput.current.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        if (file.type.includes("video")) {
            hiddenVideo.current.setAttribute("src", URL.createObjectURL(file));
            setVideoThumbailStatus(true);
        } else if (file.type.includes("image")) {
            reader.onloadend = () => {
                hiddenFileInput.current.parentElement.parentElement.querySelector(
                    "object"
                ).data = reader.result;
            };
            setVideoThumbailStatus(false);
        }
    };
    return (
        <div key={props.key} className="mt-4">
            <div className="image-card row">
                <Col className="col-8" style={{ height: "195px" }}>
                    <object
                        data={addContent}
                        class={`${videoThumbailStatus ? "d-none" : ""}`}
                        title={"thumnail"}
                    ></object>
                    <video
                        class={`video-thumbnail ${
                            !videoThumbailStatus ? "d-none" : ""
                        }`}
                        ref={hiddenVideo}
                    ></video>
                </Col>
                <Col className={`col-4 ${props.rr > 0 ? "d-flex" : ""}`}>
                    <div
                        className="ms-2 add-img-btn"
                        role={"button"}
                        onClick={() => props.setSstae(props.sstae + 1)}
                    >
                        +
                    </div>
                    {props.rr > 0 ? (
                        <div
                            class="ms-2 add-img-btn"
                            role="button"
                            onClick={() => props.setSstae(props.sstae - 1)}
                        >
                            -
                        </div>
                    ) : (
                        ""
                    )}
                </Col>
            </div>
            <div className="w-full text-center">
                <Button
                    className="ms-3 admin-primary-btn"
                    onClick={() => hiddenFileInput.current.click()}
                >
                    Upload
                </Button>
                <input
                    type={"file"}
                    key={props.rr}
                    ref={hiddenFileInput}
                    name={`file-${props.rr}`}
                    onChange={processThumbnail}
                    style={{ display: "none" }}
                    accept="image/*,video/mp4"
                />
            </div>
        </div>
    );
};

function AddContent() {
    const [sstae, setSstae] = React.useState(1);
    useEffect(() => {
        console.log(sstae);
    }, [sstae]);
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header">Add Content</div>

                    <div className="add-content-wrapper">
                        <Row>
                            <Col lg={4} className="mr-inherit">
                                <div className="add-content-img">
                                    <p className="add-content-label text-nowrap">
                                        Modal Images
                                        <p className="img-types">
                                            . PNG, JPG, GIF, WEBP, or MP4{" "}
                                            <span className="ms-4 mob-d-flex">Maximum 200MB</span>
                                        </p>
                                    </p>
                                    {[...Array(sstae)].map((k, i) => (
                                        <Render
                                            key={i}
                                            rr={i}
                                            setSstae={setSstae}
                                            sstae={sstae}
                                        />
                                    ))}
                                </div>

                            </Col>
                            <Col lg={8} className="ml-inherit">
                                <div className="add-content-detail">
                                    <div className="admin-header mob-mt0"><p className="mob-mt3">Basic Details</p></div>

                                    <Row>
                                        <Col xs={12} >
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    No of Copies
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} >
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    No of Copies for Sales
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} >
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    Display Name
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12} >
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    Category
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={6}>
                                            <Form.Label className="add-content-label me-3">
                                                For Sale
                                            </Form.Label>
                                            <br />
                                            <Form.Check
                                                inline
                                                label="Yes"
                                                className="add-content-value mb-3"
                                                controlId="formBasicEmail"
                                                type="radio"
                                            ></Form.Check>
                                            <Form.Check
                                                inline
                                                label="No"
                                                className="add-content-value mb-3"
                                                controlId="formBasicEmail"
                                                type="radio"
                                            ></Form.Check>
                                            <Form.Check
                                                inline
                                                label="Bid"
                                                className="add-content-value mb-3"
                                                controlId="formBasicEmail"
                                                type="radio"
                                            ></Form.Check>
                                        </Col>

                                        <Col xs={6}>
                                            <Form.Label className="add-content-label me-3">
                                                Content Availability
                                            </Form.Label>
                                            <br />
                                            <Form.Check
                                                inline
                                                label="Tier 1"
                                                className="add-content-value mb-3"
                                                controlId="formBasicEmail"
                                                type="radio"
                                            ></Form.Check>
                                            <Form.Check
                                                inline
                                                label="Tier 2"
                                                className="add-content-value mb-3"
                                                controlId="formBasicEmail"
                                                type="radio"
                                            ></Form.Check>
                                            <Form.Check
                                                inline
                                                label="Tier 3"
                                                className="add-content-value mb-3"
                                                controlId="formBasicEmail"
                                                type="radio"
                                            ></Form.Check>
                                        </Col>

                                        <Col xs={6}>
                                            <Form.Label className="add-content-label me-3">
                                                Contract Type
                                            </Form.Label>
                                            <br />
                                            <Form.Check
                                                inline
                                                label="ECR 115"
                                                className="add-content-value mb-3"
                                                controlId="formBasicEmail"
                                                type="radio"
                                            ></Form.Check>
                                        </Col>
                                    </Row>
                                    <hr></hr>

                                    <div className="admin-header">Payment Details</div>

                                    <Row>
                                        <Col xs={6}>
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    Basic Price (Taboo)
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    Platform Fee (15%)
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    You get (Taboo)
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    Basic Price (USD)
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    Platform Fee (15%)
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={6}>
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    You get (USD)
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col xs={12}>
                                            <Form.Check
                                                label="Accept Payment In Taboo"
                                                className="add-content-value mb-3"
                                                controlId="formBasicEmail"
                                                type="checkbox"
                                            ></Form.Check>
                                        </Col>

                                        <Col xs={12}>
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    Meta Tag
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    type="text"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col xs={12}>
                                            <Form.Group
                                                className="text-muted mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="add-content-label">
                                                    Description (Optional)
                                                </Form.Label>
                                                <Form.Control
                                                    className="add-content-input"
                                                    as="textarea"
                                                    rows={3}
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-center mb-4">
                                        <Col xs="6">
                                            <Button className="admin-secondry-btn">
                                                Preview
                                            </Button>
                                        </Col>
                                        <Col xs="6">
                                            {/* <Button className="admin-secondry-btn me-3">Cancel</Button> */}
                                            <Button className="admin-primary-btn">
                                                Update
                                            </Button>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        
                        
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AddContent;
