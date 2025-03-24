import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import styles from "./paginas.module.css";
import { Input, QRCode, Segmented, Space } from 'antd';

const QRgenerator = () => {
    const [link, setLink] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [qrCodeValue, setQrCodeValue] = useState('');
    const [renderType, setRenderType] = useState('canvas');

    const isValidURL = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setLink(value);

        if (value.trim() === '') {
            setIsValid(false);
            setErrorMessage('');
        } else if (!isValidURL(value)) {
            setIsValid(false);
            setErrorMessage('Por favor, insira um URL válido (ex: https://www.exemplo.com)');
        } else {
            setIsValid(true);
            setErrorMessage('');
        }
    };

    const handleGenerateQR = () => {
        console.log("Gerando QR code para:", link);
        setQrCodeValue(link);
    };

    const downloadQRCode = () => {
        if (renderType === 'canvas') {
            const canvas = document.getElementById('myqrcode')?.querySelector('canvas');
            if (canvas) {
                const url = canvas.toDataURL();
                doDownload(url, 'QRCode.png');
            }
        } else {
            const svg = document.getElementById('myqrcode')?.querySelector('svg');
            if (svg) {
                const svgData = new XMLSerializer().serializeToString(svg);
                const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
                const url = URL.createObjectURL(blob);
                doDownload(url, 'QRCode.svg');
            }
        }
    };

    const doDownload = (url, fileName) => {
        const a = document.createElement('a');
        a.download = fileName;
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    return (
        <Container fluid className={styles.container}>
            <Row className="justify-content-center vh-100">
                <Col md={6} lg={5} className="px-4 py-3 d-flex flex-column justify-content-center">
                    <h1 className={styles.titulo}>QR Code Generator</h1>
                    <p className={styles.descricao}>
                        Gere seu QrCode rápido e fácil !<br />
                        Basta inserir o link que deseja transformar em QR Code abaixo.
                    </p>

                    <div className={styles.inputContainer}>
                        <Input
                            placeholder="Digite seu link aqui (ex: https://www.exemplo.com)"
                            value={link}
                            onChange={handleInputChange}
                            className={`mb-1 ${styles.inputField}`}
                            status={link && !isValid ? "error" : ""}
                        />

                        {errorMessage && (
                            <div className={styles.errorMessage}>{errorMessage}</div>
                        )}

                        <Button
                            variant="primary"
                            disabled={!isValid}
                            onClick={handleGenerateQR}
                            className={styles.botaoGerar}
                        >
                            Gerar QR Code
                        </Button>
                    </div>
                </Col>

                <Col md={6} lg={5} className="d-flex align-items-center justify-content-center">
                    <div id="myqrcode" className={styles.qrCodeContainer}>
                        {qrCodeValue ? (
                            <Space direction="vertical" align="center">
                                <Segmented
                                    options={['canvas', 'svg']}
                                    value={renderType}
                                    onChange={setRenderType}
                                />
                                <QRCode
                                    type={renderType}
                                    value={qrCodeValue}
                                    bgColor="#fff"
                                    style={{ marginBottom: 16 }}
                                />
                                <Button
                                    onClick={downloadQRCode}
                                    className={styles.downloadButton}
                                >
                                    Download
                                </Button>
                            </Space>
                        ) : (
                            <div className={styles.noQRCode}>Nenhum QR Code gerado ainda</div>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default QRgenerator;