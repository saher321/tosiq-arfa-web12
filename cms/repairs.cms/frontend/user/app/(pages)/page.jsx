'use client';

import { Button, Col, Container, Row } from "react-bootstrap";
import HomeSlider from "../components/home/HomeSlider";
import SectionHeading from "../components/SectionHeading";
import WebLayout from "../layout/WebLayout";
import ServiceCard from "../components/home/ServiceCard";

const page = () => {
  return (
    <WebLayout>
     <section className="page-section">
      <HomeSlider />
     </section>

     <section className="page-section">
      <Container fluid="md">
        <SectionHeading title="Services" />
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
        </Row>
      </Container>
     </section>
     
     <section className="page-section">
      <Container fluid="md">
        <SectionHeading title="Teams" />
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
        </Row>
      </Container>
     </section>
     
     <section className="page-section">
      <Container fluid="md">
        <SectionHeading title="Reviews" />
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
          <Col xs={12} sm={6} md={4} lg={3} >
            <ServiceCard />
          </Col>
        </Row>
      </Container>
     </section>
     
    <SectionHeading title="Need an Appointment?" />
     <section className="bg-gray">
      <Container fluid="md">
        <Row>
          <Col xs={12} sm={6} md={4} lg={6} >
            <h3>Book your appointment today</h3>
          </Col>
          <Col xs={12} sm={6} md={4} lg={6} align="right">
            <Button variant="success">Book Appointment</Button>
          </Col>
        </Row>
      </Container>
     </section>
    </WebLayout>
  )
}

export default page
