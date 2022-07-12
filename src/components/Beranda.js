import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react"

const Beranda = () => {

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
        <div className="beranda" id="beranda">
            <Container className="text-white d-flex justify-content-start align-items-center" style={{marginTop: "260px"}}>

                {responsive === false?
                <>
                <Row>
                    <Col>
                    <div className="title1">THE STYLE IS</div>
                    <div className="title2">DEFINED BY YOURS</div>
                    <hr style={{height:"5px", width:"45%"}}></hr>
                    </Col>
                </Row>
                </>
            :
                <Row>
                    <Col>
                    <div className="title3">THE STYLE IS</div>
                    <div className="title4">DEFINED BY YOURS</div>
                    <hr style={{height:"5px", width:"45%"}}></hr>
                    </Col>
                </Row>
                }

            </Container>
        </div>
    )
}

export default Beranda