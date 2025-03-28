import React from "react";
import './pageHeader.css';
import '../../global/global.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SunOutlined, MoonOutlined, QrcodeOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

function PageHeader() {
    return (
        <Navbar className="header px-3" sticky="top">
            <Container fluid>
                <Navbar.Brand href="#home"><QrcodeOutlined className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto gap-5">
                        <Nav.Link href="#generator" className="font">QR GENERATOR</Nav.Link>
                        <Nav.Link href="#converter" className="font">FILE CONVERTER</Nav.Link>
                    </Nav>
                    <Switch checkedChildren={<SunOutlined />} unCheckedChildren={<MoonOutlined />} />
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default PageHeader;