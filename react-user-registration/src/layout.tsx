import { Outlet } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


export function Layout() {
    return (
        <>
            <header>
                <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="/">React User-Registration</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Início</Nav.Link>
                                <Nav.Link href="candidates">Candidatos</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <>
                <Outlet />
            </>
            <footer>

            </footer>

        </>
    )
}