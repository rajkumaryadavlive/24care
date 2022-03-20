import React from "react";
import {
    Col,
    Container,
    Image,
    Row,
    Dropdown,
    ButtonGroup,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import logo from "../../assets/admin/logo.png";
import icon1 from "../../assets/admin/icon1.png";
import icon2 from "../../assets/admin/icon2.png";
import icon3 from "../../assets/admin/icon3.png";
import icon4 from "../../assets/admin/icon4.png";
import icon5 from "../../assets/admin/icon5.png";

function SiteNav() {
    const location = useLocation();
    const [largeNav, setLargeNav] = React.useState(false);
    const [mobileNav, setMobileNav] = React.useState(false);
    return (
        <div>
            {/* <Container fluid> */}
                <div className={`nav-wrapper ${mobileNav ? "nav-close" : ""} ${largeNav ? "animat-in" : ""}`}>
                    <div className="nav-top">
                        <div className="logo">
                            <img src={logo}></img>
                            {!mobileNav &&  <span
                                className={`side-nav-arrow ${largeNav ? "side-nav-arrow-position" : ""
                                    }`}
                                onClick={() => setLargeNav(!largeNav)}
                            >
                                {!largeNav ? (
                                    <i className="fa fa-arrow-right"></i>
                                ) : (
                                    <i className="fa fa-arrow-left"></i>
                                )}
                            </span>}
                        </div>
                        <div className="site-nav">
                            <div
                                className={`menu-list ${location.pathname.includes("dashboard")
                                    ? "active"
                                    : ""
                                    }`}
                            >
                                <a href="/creator/dashboard">
                                    <img src={icon1}></img>
                                </a>
                            </div>
                            <div
                                className={`${!largeNav ? "side-nav-none" : ""
                                    }`}
                            >
                                <a href="/creator/dashboard">
                                    <span>Dashboard</span>
                                </a>
                            </div>
                        </div>
                        <div className="site-nav">
                            <div
                                className={`menu-list ${location.pathname.includes("orders")
                                    ? "active"
                                    : ""
                                    }`}
                            >
                                <a href="/creator/orders">
                                    <img src={icon2}></img>
                                </a>
                            </div>
                            <div
                                className={`${!largeNav ? "side-nav-none" : ""
                                    }`}
                            >
                                <a href="/creator/dashboard">
                                    <span>Offers</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className={`menu-list ${location.pathname.includes("profile")
                                ? "active"
                                : ""
                                }`}
                        >
                            <a href="/creator/profile">
                                <img src={icon3}></img>
                            </a>
                        </div>
                        <div className="site-nav">
                            <div className="menu-list">
                                <img src={icon4}></img>
                            </div>
                            <div
                                className={`${!largeNav ? "side-nav-none" : ""
                                    }`}
                            >
                                <a href="/creator/dashboard">
                                    <span>KYC Management</span>
                                </a>
                            </div>
                        </div>
                        <div className="site-nav">
                            <div className="menu-list">
                                <img src={icon5}></img>
                            </div>
                            <div
                                className={`${!largeNav ? "side-nav-none" : ""
                                    }`}
                            >
                                <a href="/creator/dashboard">
                                    <span>Transaction Management</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="nav-bottom">
                        <span
                            className={`d-block d-md-none side-mobile-nav-arrow ${mobileNav ? "side-mobile-nav-arrow-position" : ""
                                }`}
                            onClick={() => setMobileNav(!mobileNav)}
                        >
                            {!mobileNav ? (
                                <i class="fa fa-angle-double-left"></i>
                            ) : (
                                <i class="fa fa-angle-double-right"></i>
                            )}
                        </span>
                        <Dropdown as={ButtonGroup}>
                            <div className="bottom-logo">AM</div>
                            <Dropdown.Toggle
                                split
                                className="nav-dropdown"
                                id="dropdown-split-basic"
                            />
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Profile</Dropdown.Item>
                                <Dropdown.Item href="#">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            {/* </Container> */}
        </div>
    );
}

export default SiteNav;
