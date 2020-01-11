import React from 'react'
import { Form, Button, Nav, Navbar } from 'react-bootstrap';

export default () => {
    return (
            
            <Navbar bg='light' expand="lg" className='navbar'>
                <Navbar.Brand href="#home">Student Medium</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-success">Login</Button>
                        <Button variant="outline-success">Signup</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

    )
}
