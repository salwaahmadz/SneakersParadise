import { Container, Row, Col, Form, Card} from "react-bootstrap"
import { useState, useEffect } from "react"
import nike from "../assets/images/nike.png"
import fyc from "../assets/images/fyc.png"
import puma from "../assets/images/puma.png"
import balenciaga from "../assets/images/balenciaga.png"
import vans from "../assets/images/vans.png"
import brodo from "../assets/images/brodo.png"

const Katalog = () => {

    const [responsive, setResponsive] = useState(typeof window !== "undefined" ? window.innerWidth <= 768 : false)
    useEffect(() => {
      const Handle = () => {
        if(window.innerWidth <= 768){
            setResponsive(true)
        }else{
            setResponsive(false)
        }
      }

        if(window !== "undefined") window.addEventListener("resize", Handle)
    }, [])

    useEffect(() => {

    }, [responsive])
    

    return(
            <div className="katalogPage m-5">
                <Container className="mt-5">
                    <Row>
                        <Col className="col-md-3 filterPadding dropShadow">
                            <Row>
                                <Col className="col-md-12">
                                    <div className="filterCard">
                                        <h4 className="headText">Filter Pencarian</h4>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-md-12">
                                    <div className="filterCard">
                                        <h4 className="headText">Merek</h4>
                                        <Row className="gridGap">
                                            <Col>
                                            <button className="buttonFilter">Adidas</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">Nike</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">Compass</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">FYC</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">Puma</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">Vans</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">Fila</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">Converse</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">Balenciaga</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">Ventela</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">Patrobas</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">Brodo</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">NAH Project</button>
                                            </Col>
                                            <Col>
                                            <button className="buttonFilter">Warrior</button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-md-12">
                                    <div className="filterCard">
                                        <h4 className="headText">Jenis Kelamin</h4>
                                        <Row className="gridGap">
                                            <Col>
                                                <button className="buttonFilter">Pria</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">Wanita</button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col className="col-md-12">
                                    <div className="filterCard">
                                        <h4 className="headText">Ukuran</h4>
                                        <Row className="gridGap">
                                            <Col>
                                                <button className="buttonFilter">37</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">38</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">39</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">40</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">41</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">42</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">43</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">44</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">45</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">46</button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        
                            <Row>
                                <Col className="col-md-12">
                                    <div className="filterCard">
                                        <h4 className="headText">Harga</h4>
                                        <Row className="gridGap">
                                            <Col>
                                                <button className="buttonFilter">Harga Terendah</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">Terlaris</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">Harga Tertinggi</button>
                                            </Col>
                                            <Col>
                                                <button className="buttonFilter">Discount</button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>

                        </Col>

                        <Col className="col-md-9">
                            <Row className="mt-3 ms-2">
                                <Col>
                                    <Form className="d-flex">
                                        <Form.Control
                                            type="search"
                                            placeholder="Cari sneakers idamanmu"
                                            className="me-2"/>
                                    </Form>
                                </Col>
                            </Row>

                            <Row className="mt-3 ms-2 gridGap2">
                                <Col className="col-md-4">
                                <Card style={{ width: "230px", height: "308px", borderRadius:"10px" }}>
                                    <Card.Img variant="top" src={nike} />
                                    <Card.Body>
                                        <Card.Title className="headText">Nike Air Force 1 Pixel '07 Craft</Card.Title>
                                        <Card.Text className="price">Rp. 1.799.000</Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="col-md-4">
                                <Card style={{ width: "230px", height: "308px", borderRadius:"10px" }}>
                                    <Card.Img variant="top" src={fyc} />
                                    <Card.Body>
                                        <Card.Title className="headText">FYC Caven Charcoal Turqoise</Card.Title>
                                        <Card.Text className="price">Rp. 399.000</Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="col-md-4">
                                <Card style={{ width: "230px", height: "308px", borderRadius:"10px" }}>
                                    <Card.Img variant="top" src={puma} />
                                    <Card.Body>
                                        <Card.Title className="headText">Puma Suede Classic XXI Men's Sneakers</Card.Title>
                                        <Card.Text className="price">Rp. 1.199.000</Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="col-md-4">
                                <Card style={{ width: "230px", height: "308px", borderRadius:"10px" }}>
                                    <Card.Img variant="top" src={balenciaga} />
                                    <Card.Body>
                                        <Card.Title className="headText">Balenciaga Speed Sneakers</Card.Title>
                                        <Card.Text className="price">Rp. 8.499.000</Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="col-md-4">
                                <Card style={{ width: "230px", height: "308px", borderRadius:"10px" }}>
                                    <Card.Img variant="top" src={vans} />
                                    <Card.Body>
                                        <Card.Title className="headText">Vans Authentic</Card.Title>
                                        <Card.Text className="price">Rp. 799.000</Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>

                                <Col className="col-md-4">
                                <Card style={{ width: "230px", height: "308px", borderRadius:"10px" }}>
                                    <Card.Img variant="top" src={brodo} />
                                    <Card.Body>
                                        <Card.Title className="headText">Brodo Garuda Court White Red Green</Card.Title>
                                        <Card.Text className="price">Rp. 795.000</Card.Text>
                                    </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
    )
}

export default Katalog