import React from 'react'
import './styles/LandingPage.css'
import { Container, Row, Col, Button } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <Container>
        <Row>
          <Col className="text-center">
            {/* <h1 className="title">Welcome to Steve's Jobs</h1> */}
            <img className="img-fluid" src="src/assets/steves-jobs-main.png" alt="Steve's Jobs logo"/>
            <p className="subtitle">
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
