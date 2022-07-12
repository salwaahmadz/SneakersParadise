import { Container, Row, Col, Button } from "react-bootstrap";
import { useState, useEffect } from "react"

const BerandaPutih = () => {

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
        <div className="beranda2 pageBG">
            <Container className="d-flex justify-content-end">

                {responsive === false?
                <>
                <Row style={{marginTop: "360px"}}>
                    <Col>
                    <div className="title5">FEEL THE CONFIDENCE</div>
                    <div className="title6">WITHIN YOU</div>
                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="warning"
                        style={{fontWeight:600, fontSize:"2rem", borderRadius:"10px"}}
                        href="/katalog"
                        >Cek Katalog</Button>
                    </div>
                    </Col>
                </Row>
                </>
            :
                <Row style={{marginTop: "200px"}}>
                    <Col>
                    <div className="title7">FEEL THE CONFIDENCE</div>
                    <div className="title8">WITHIN YOU</div>
                    <div className="d-flex justify-content-end mt-3">
                        <Button variant="warning"
                        style={{fontWeight:600, fontSize:"1rem", borderRadius:"10px"}}
                        href="/katalog"
                        >Cek Katalog</Button>
                    </div>
                    </Col>
                </Row>
                }

            </Container>
        </div>
    )
}

export default BerandaPutih