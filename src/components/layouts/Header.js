import { useState } from "react";
import {
    Button,
    Container,
    Image,
    Nav,
    Navbar,
    Offcanvas,
    InputGroup,
    FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo3.png";
import search from "../../assets/search.png";
import UserIcon from "../../assets/images/user-icon.png";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../reducers/authReducer";

function Header(props) {
    const [isSearch, setSearch] = useState(false);
    const [isShow, setShow] = useState(false);
    const [accountDropDown, setAccountDropDown] = useState(false);
    const isAuthenticated = useSelector(
        (state) => state.auth.value.isAuthenticated
    );
    const dispatch = useDispatch();

    const toggleSearch = () => {
        if (isSearch) {
            setSearch(false);
        } else {
            setSearch(true);
        }
        handleClose();
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const AuthButton = () => {
        if (!isAuthenticated) {
            return (
                <div className="non-auth-menu">
                    <Link to="/login">
                        <Button className="primary-btn me-1">Login</Button>
                    </Link>
                    <Button className="primary-btn me-3">
                        Sign Up as Doctor
                    </Button>
                </div>
            );
        } else {
            return (
                <div className="auth-menu">
                    <Button className="nav-btn-custom">511976.€</Button>
                    <Button
                        className="nav-btn-custom"
                        id="account-btn-nav"
                        onClick={() => setAccountDropDown(!accountDropDown)}
                    >
                        0x7e85 <img src={UserIcon} alt="user icon" />
                    </Button>
                    {accountDropDown ? (
                        <div className="nav-btn-dropdown-custom">
                            <Link
                                to="/all-transaction"
                                className="dropdown-item bolded-text-15"
                            >
                                All Transaction
                            </Link>

                            <Link
                                to="/all-stake"
                                className="dropdown-item bolded-text-15"
                            >
                                Stake
                            </Link>

                            <Link
                                to="#"
                                className="dropdown-item bolded-text-15"
                                onClick={() => {
                                    dispatch(logout());
                                }}
                            >
                                Logout <i className="fa fa-sign-out"></i>
                            </Link>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            );
        }
    };

    return (
        <div className="header-wrapper">
            <Navbar className="d-none d-lg-block" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <Image src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="m-auto my-2 my-lg-0" navbarScroll>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/doctors">Doctors</Nav.Link>
                            <Nav.Link href="/lab-test">Lab Tests</Nav.Link>
                            <Nav.Link href="/farms">Farm</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                        {AuthButton()}
                    </Navbar.Collapse>

                    <Button
                        className="d-none d-lg-block search-btn"
                        onClick={() => toggleSearch()}
                    >
                        <img src={search} alt="logo"></img>
                    </Button>
                </Container>
            </Navbar>

            <Navbar className="d-block d-lg-none" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <Image src={logo} />
                    </Navbar.Brand>
                    {AuthButton()}

                    <Navbar.Toggle
                        aria-controls="offcanvasNavbar"
                        onClick={() => handleShow()}
                    />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        show={isShow}
                        onHide={() => handleClose()}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                Menus
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className="mb-2">
                                <Link className="mb-4" to="/buy">
                                    Buy Taboo
                                </Link>
                                <br />
                            </div>
                            <div className="mb-2">
                                <Link className="mb-4" to="/explore">
                                    Explore
                                </Link>
                                <br />
                            </div>
                            <div className="mb-2">
                                <Link className="mb-4" to="/adultstars">
                                    Adult Stars
                                </Link>
                                <br />
                            </div>
                            <div className="mb-2">
                                <Link className="mb-4" to="/farms">
                                    Farm
                                </Link>
                                <br />
                            </div>
                            <div className="mb-2">
                                <Link className="mb-4" to="/community">
                                    Community
                                </Link>
                                <br />
                            </div>
                            <div className="mb-2">
                                <Link className="mb-4" to="/stake">
                                    Stake
                                </Link>
                                <br />
                            </div>
                            {!isAuthenticated ? (
                                <>
                                    <div className="mb-2">
                                        <Link to="/login">Login</Link>
                                    </div>
                                    <div className="mb-2">
                                        <Link to="/login">
                                            Signup as creator
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <div className="mb-2">
                                    <Link to="#">Logout</Link>
                                </div>
                            )}
                            <div
                                className="mb-2 "
                                onClick={() => toggleSearch()}
                            >
                                <Link to="#">Search</Link>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

            {isSearch && (
                <InputGroup className="search-input-group mb-3">
                    <FormControl
                        placeholder="Search Here..."
                        className="search-input customInputField"
                    />
                    <InputGroup.Text className="primary-btn search-input-btn">
                        Search
                    </InputGroup.Text>
                </InputGroup>
            )}
        </div>
    );
}

export default Header;
