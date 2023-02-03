import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div style={{ backgroundColor: '#D9E8F5', height: '100vh' }}>
      <Container style={{ paddingTop: '10%' }}>
        <Row>
          <Col className="text-center">
            <h1 style={{ fontWeight: 'bold', color: '#495057' }}>Welcome to Steve's Jobs</h1>
            <p style={{ fontSize: '1.2rem', color: '#495057' }}>
              Find your dream job or post a job listing and start your journey today.
            </p>
            <p>
              <Button variant="outline-primary" href='/jobs/'>View Jobs</Button>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage