import {Navbar, Container, Nav} from "react-bootstrap"
import logo from "../assets/logo/logo.png"
import bkeranjangIco from "../assets/icon/bchart.png"
import bprofileIco from "../assets/icon/bprofile.png"
import { useState, useEffect } from "react"

const NavigationPutih = () => {

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
        <Navbar collapseOnSelect expand="md" bg="light">
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
                <Nav.Link className="navFont" style={{color: "#E53D00", fontWeight:"700"}} href="/">Beranda</Nav.Link>
                <Nav.Link className="navFont text-black" href="/katalog">Katalog</Nav.Link>
                <Nav.Link className="navFont text-black">Toko Offline</Nav.Link>
                <Nav.Link className="navFont text-black">Tentang Kami</Nav.Link>
                </div>

                <div className="d-flex justify-content-center ms-auto">
                    <Nav.Link>
                    <img alt="" src={bkeranjangIco} className="d-inline-block align-top darkIcon"
                    />{''}
                    </Nav.Link>

                    <Nav.Link>
                    <img alt="" src={bprofileIco} className="d-inline-block align-top" tintColor="black"
                    />{' '}
                    </Nav.Link>    
                </div>
                </>
            :
                <div>
                    <Nav.Link className="navFont" style={{color: "#E53D00", fontWeight:"700"}} href="/">Beranda</Nav.Link>
                    <Nav.Link className="navFont text-black" href="/katalog">Katalog</Nav.Link>
                    <Nav.Link className="navFont text-black">Toko Offline</Nav.Link>
                    <Nav.Link className="navFont text-black">Tentang Kami</Nav.Link>
                    <Nav.Link className="navFont text-black">Keranjang</Nav.Link>
                    <Nav.Link className="navFont text-black">Profile</Nav.Link>
                </div>
            }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationPutih