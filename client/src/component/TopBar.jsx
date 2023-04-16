import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { MdLocalOffer } from "react-icons/md";
import { useHistory } from "react-router-dom";

const TopBar = () => {
  const history = useHistory();
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <h6 className="text-light">
            <MdLocalOffer className="text-warning" /> &nbsp;&nbsp; Free Home
            Delivery on Order Above 500/- Rupees
          </h6>
          <Nav className="ms-auto">
            <Nav.Link onClick={() => history.push("/")}>Home</Nav.Link>

            <Nav.Link onClick={() => history.push("/about")}>About Us</Nav.Link>

            <Nav.Link onClick={() => history.push("/contact")}>
              Contact Us
            </Nav.Link>

            <Nav.Link onClick={() => history.push("/policy")}>
              terms and policy
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default TopBar;
