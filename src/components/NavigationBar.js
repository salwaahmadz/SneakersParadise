import {Navbar, Container, Nav, Offcanvas} from "react-bootstrap"
import logo from "../assets/logo/logo.png"
import keranjangIco from "../assets/icon/cart.png"
import profileIco from "../assets/icon/profile.png"
import { useState, useEffect } from "react"

const NavigationBar = () => {

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
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand className="ms-3" href="/">
            <img
              alt="logo"
              src={logo}
              width={"128px"}
              height={"64px"}
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">

                {responsive === false?
                <>
                <div className="d-flex m-auto justify-content-center">
                <Nav.Link className="navFont" style={{color: "#E53D00", fontWeight:"700"}}>Beranda</Nav.Link>
                <Nav.Link className="navFont text-white">Katalog</Nav.Link>
                <Nav.Link className="navFont text-white">Toko Offline</Nav.Link>
                <Nav.Link className="navFont text-white">Tentang Kami</Nav.Link>
                </div>

                <div className="d-flex justify-content-center ms-auto">
                    <Nav.Link>
                    <img
                    alt=""
                    src={keranjangIco}
                    className="d-inline-block align-top"
                    />{' '}
                    </Nav.Link>

                    <Nav.Link>
                    <img
                    alt=""
                    src={profileIco}
                    className="d-inline-block align-top"
                    />{' '}
                    </Nav.Link>    
                </div>
                </>
            :
                <div>
                    <Nav.Link className="navFont" style={{color: "#E53D00", fontWeight:"700"}}>Beranda</Nav.Link>
                    <Nav.Link className="navFont text-white">Katalog</Nav.Link>
                    <Nav.Link className="navFont text-white">Toko Offline</Nav.Link>
                    <Nav.Link className="navFont text-white">Tentang Kami</Nav.Link>
                    <Nav.Link className="navFont text-white">Keranjang</Nav.Link>
                    <Nav.Link className="navFont text-white">Profile</Nav.Link>
                </div>
            }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar