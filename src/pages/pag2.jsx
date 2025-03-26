import React from "react";
import styles from "./paginas.module.css";
import { Col, Container, Row } from "react-bootstrap";

const Converter = () => {
    return (
        <Container fluid className={styles.container} id="converter">
            <div className="border-start ps-4">
                <h1 className={styles.titulo}>Conversor de Arquivos</h1>
                <p className={styles.descricao}>descricao</p>
            </div>
            <Row>
                <Col className="m-5">
                    <div className="border d-flex justify-content-center align-items-center bg-secondary rounded" style={{ height: "250px" }}>
                        <h3>PDF para Word</h3>
                    </div>
                </Col>
                <Col className="m-5">
                    <div className="border d-flex justify-content-center align-items-center bg-secondary rounded" style={{ height: "250px" }}>
                        <h3>PDF para PowerPoint</h3>
                    </div>
                </Col>
                <Col className="m-5">
                    <div className="border d-flex justify-content-center align-items-center bg-secondary rounded" style={{ height: "250px" }}>
                        <h3>PDF para Excel</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="m-5">
                    <div className="border d-flex justify-content-center align-items-center bg-secondary rounded" style={{ height: "250px" }}>
                        <h3>Word para PDF</h3>
                    </div>
                </Col>
                <Col className="m-5">
                    <div className="border d-flex justify-content-center align-items-center bg-secondary rounded" style={{ height: "250px" }}>
                        <h3>Power Point para PDF</h3>
                    </div>
                </Col>
                <Col className="m-5">
                    <div className="border d-flex justify-content-center align-items-center bg-secondary rounded" style={{ height: "250px" }}>
                        <h3>Excel para PDF</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="m-5">
                    <div className="border d-flex justify-content-center align-items-center bg-secondary rounded" style={{ height: "250px" }}>
                        <h3>PDF para JPG</h3>
                    </div>
                </Col>
                <Col className="m-5">
                    <div className="border d-flex justify-content-center align-items-center bg-secondary rounded" style={{ height: "250px" }}>
                        <h3>JPG para PDF</h3>
                    </div>
                </Col>
                <Col className="m-5">
                    <div className="border d-flex justify-content-center align-items-center bg-secondary rounded" style={{ height: "250px" }}>
                        <h3>HTML para PDF</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Converter;

