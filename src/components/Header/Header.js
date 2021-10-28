import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import logo from '../../images/Group 1329.png'
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    const history = useHistory();

    const handleHomePage = () => {
        history.push('/home');
    }

    const activeStyle = {
        fontWeight: "bold",
        color: "#33D1CB",
        borderBottom: "solid 2px #33D1CB"
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand onClick={handleHomePage} style={{ cursor: 'pointer' }}>
                    <img
                        src={logo}
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/donate">Donate</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/my-event">My Event</Nav.Link>
                        <Nav.Link as={NavLink} activeStyle={activeStyle} to="/blog">Blog</Nav.Link>
                        {user.email ?
                            <>
                                <img src={user.photoURL} alt="" style={{ height: 30, width: 30, borderRadius: 50 }} />
                                <Button className="ms-2 btn btn-sm" onClick={logOut}>Logout</Button>
                            </>
                            :
                            <Nav.Link as={Link} to="/register"><Button className="btn btn-sm">Register</Button></Nav.Link>
                        }
                        <Nav.Link as={Link} to="/admin"><Button className="btn btn-sm" variant="secondary">Admin</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;