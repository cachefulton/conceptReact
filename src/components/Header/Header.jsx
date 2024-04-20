import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";


function Header(props) {
  return (
    <Navbar id="color-nav" fixed="top" expand="lg">
      <Container >
        <Navbar.Brand id="title" href="/"><img id="logo" src={props.logo} alt=""/>&nbsp;&nbsp;{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
        >
          <Nav className="me-auto" variant="pills" defaultActiveKey="/">
            <Nav.Item>
              <LinkContainer className="mx-1 ps-5 pe-5" to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer className="mx-1 ps-5 pe-5" to="/teams">
                <Nav.Link>Teams</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
