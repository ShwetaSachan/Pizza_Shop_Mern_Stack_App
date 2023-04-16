import React from "react";
import { Navbar, Nav, Container, Image, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../actions/userAction";
import { useHistory } from "react-router-dom";
const NavBar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  const history = useHistory();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand>
            <Image
              src="images/logo.png"
              alt="logo"
              style={{ height: "50px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {currentUser ? (
                <Nav.Link onClick={() => history.push("/")}>
                  <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                    <Nav.Link onClick={() => history.push("/orders")}>
                      <NavDropdown.Item>orders</NavDropdown.Item>
                    </Nav.Link>
                    <NavDropdown.Item
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link onClick={() => history.push("/login")}>
                    Login
                  </Nav.Link>

                  <Nav.Link onClick={() => history.push("/register")}>
                    Register
                  </Nav.Link>
                </>
              )}

              <Nav.Link onClick={() => history.push("/cart")}>
                Cart {cartState.cartItems.length}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
