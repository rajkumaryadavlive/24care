import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { login } from "../reducers/authReducer";

function Login() {
    const [isLogin, setLogin] = useState(true);
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const dispatch = useDispatch();

    const toggleLogin = () => {
        if (isLogin) {
            setLogin(false);
        } else {
            setLogin(true);
        }
    };

    return (
        <div className="page-wrapper">
            <div className="page-header mb-5">
                <Header></Header>
            </div>
            <Container className="page-body explore-details" fluid>
                <Container className="list p-relative">
                    {isLogin && (
                        <Row>
                            <Col lg={6} className="login-img">
                                <div className="login-content">
                                    <div>
                                        <h1 className="mb-3">
                                            We aim to be the playboy
                                        </h1>
                                        <p className="content-details-md">
                                            This is your gateway to the finest
                                            adult content on blockchain. Inside
                                            you will find DeFi tools to increase
                                            your Taboo holdings, access
                                            exclusive content, and interact with
                                            Taboo Protocol.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="content-details-sm">
                                            Don't have an account?
                                        </p>
                                        <Button
                                            className="secondry-btn"
                                            onClick={() => toggleLogin()}
                                        >
                                            Register
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col
                                lg={6}
                                className="login-form-content margin-minus"
                            >
                                <h2>Login</h2>
                                <p className="content-details-sm mb-3">
                                    Login using an existing account or create a
                                    new account. Please note that this process
                                    is for creators only. memebers can simply
                                    login by Metamask/Wallet Connect by Clicking
                                    here.
                                </p>
                                <Row>
                                    <Col className="mb-2" xl={12}>
                                        <input
                                            type="email"
                                            name="email"
                                            className="customInputField"
                                            id="email"
                                            placeholder="Email Address"
                                            onChange={(e) =>
                                                setUserEmail(e.target.value)
                                            }
                                        />
                                    </Col>
                                    <Col className="mb-2" xl={12}>
                                        <input
                                            type="password"
                                            name="password"
                                            className="customInputField"
                                            id="password"
                                            placeholder="Password"
                                            onChange={(e) =>
                                                setUserPassword(e.target.value)
                                            }
                                        />
                                    </Col>
                                    <Col className="text-center">
                                        <Button
                                            className="primary-btn"
                                            type="submit"
                                            onClick={() => {
                                                dispatch(
                                                    login({
                                                        user: {
                                                            email: userEmail,
                                                            password:
                                                                userPassword,
                                                        },
                                                        isAuthenticated: true,
                                                    })
                                                );
                                            }}
                                        >
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    )}
                    {!isLogin && (
                        <Row>
                            <Col lg={6} className="login-form-content">
                                <h2>Register</h2>
                                <p className="content-details-sm mb-3">
                                    Please note that this process is for
                                    creators only. Members can simply login by
                                    Metamask/Trust Wallet
                                </p>
                                <Row>
                                    <Col className="mb-2" xl={12}>
                                        <input
                                            type="text"
                                            name="name"
                                            className="customInputField"
                                            id="name"
                                            placeholder="Name"
                                        />
                                    </Col>
                                    <Col className="mb-2" xl={12}>
                                        <input
                                            type="email"
                                            name="email"
                                            className="customInputField"
                                            id="email"
                                            placeholder="Email id"
                                        />
                                    </Col>
                                    <Col className="mb-2" xl={12}>
                                        <input
                                            type="number"
                                            name="phone"
                                            className="customInputField"
                                            id="phone"
                                            placeholder="Phone"
                                        />
                                    </Col>
                                    <Col className="mb-2" xl={12}>
                                        <input
                                            type="password"
                                            name="password"
                                            className="customInputField"
                                            id="password"
                                            placeholder="Password"
                                        />
                                    </Col>
                                    <Col className="mb-2" xl={12}>
                                        <input
                                            type="password"
                                            name="re-password"
                                            className="customInputField"
                                            id="re-password"
                                            placeholder="Re-enter Password"
                                        />
                                    </Col>
                                    <Col className="text-center">
                                        <Button
                                            className="primary-btn"
                                            type="submit"
                                        >
                                            Register Now
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col lg={6} className="login-img margin-minus">
                                <div className="login-content">
                                    <div>
                                        <h1 className="mb-3">
                                            We aim to be the playboy
                                        </h1>
                                        <p className="content-details-md">
                                            This is your gateway to the finest
                                            adult content on blockchain. Inside
                                            you will find DeFi tools to increase
                                            your Taboo holdings, access
                                            exclusive content, and interact with
                                            Taboo Protocol.
                                        </p>
                                    </div>

                                    <div>
                                        <p className="content-details-sm">
                                            Already have Taboo account?
                                        </p>
                                        <Button
                                            className="secondry-btn"
                                            onClick={() => toggleLogin()}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    )}
                </Container>
            </Container>
            <Footer></Footer>
        </div>
    );
}

export default Login;
