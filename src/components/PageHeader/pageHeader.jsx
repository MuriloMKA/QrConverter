import React from "react";
import './pageHeader.css';
import '../AppContainer/AppContainer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SunOutlined, MoonOutlined, QrcodeOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

function PageHeader() {
    return (
        <Navbar expand="lg" className="bg-dark px-3" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#home"><QrcodeOutlined className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto gap-5">
                        <Nav.Link href="#home" className="text-white">QR GENERATOR</Nav.Link>
                        <Nav.Link href="#link" className="text-white">FILE CONVERTER</Nav.Link>
                    </Nav>
                    <Switch checkedChildren={<SunOutlined />} unCheckedChildren={<MoonOutlined />} />
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default PageHeader;