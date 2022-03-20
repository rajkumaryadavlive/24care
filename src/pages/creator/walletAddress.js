import React from "react";
import { Container } from 'react-bootstrap';
import SiteNav from "../../components/layouts/SiteNav";

function WalletAddress() {
    return (
        <Container fluid>
            <div className="admin-wrapper">
                <div className="admin-wrapper-site">
                    <SiteNav></SiteNav>
                </div>
                <div className="admin-wrapper-body">
                    <div className="admin-header">
                        Wallet Address
                    </div>
                    <div className="admin-body wallet-address">
                        <div className="header">Address</div>
                        <div className="content">
                            <p>
                            123, Jalan Lumut, Damai Complex,<br /> Kuala Lumpur<br /> Wilayah Persekutuan<br /> Malaysia
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}

export default WalletAddress;
