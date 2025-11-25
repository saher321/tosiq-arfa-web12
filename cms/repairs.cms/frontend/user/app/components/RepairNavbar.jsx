import React from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { APP_NAME } from '../resources/strings'
import Link from 'next/link'

const RepairNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">{APP_NAME}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navbar.Text className="me-auto">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact us</Link>
          </Navbar.Text>
          <div className="justify-content-end">
          <Navbar.Text>
            <Link href={'/contact'} className='btn text-bg-success'>Booking</Link>
          </Navbar.Text>
          </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default RepairNavbar