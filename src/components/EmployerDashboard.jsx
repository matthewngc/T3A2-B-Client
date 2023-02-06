import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, FormControl } from "react-bootstrap";
import './styles/EmployerDashboard.css'


const EmployerDashboard = ({ dashboardListings, dashboardApplications, userDetails }) => {
  console.log(userDetails)
  console.log(dashboardListings)
  console.log(dashboardApplications)
  const [locationFilter, setLocationFilter] = useState("");

  const handleLocationFilter = (event) => {
    setLocationFilter(event.target.value);
  };

  const filteredListings = dashboardListings.filter(
    (listing) => listing.location === locationFilter || locationFilter === ""
  );

  return (
    <div className='EmployerDashboard'>
      <h1>Employer Dashboard</h1>
            <div className='EmployerInformation'>
        <h2>Employer Information</h2>
        <ul>
          <li>
            <p>Name: {userDetails.company}</p>
            <p>Email: {userDetails.email}</p>
            <p>Number: {userDetails.mobile}</p>
          </li>
        </ul>
        <Button variant="primary">Edit Information</Button>
      </div>
      <Button variant="primary" href='/create-listing'>Create New Listing</Button>
      <hr></hr>
      {/* job postings */}
      <h2>Jobs Posted</h2>
      <Form inline="true" className="m-5">
        <FormControl
          as="select"
          onChange={handleLocationFilter}
          value={locationFilter}
        >
          <option value="">All Locations</option>
          <option value="NSW">New South Wales</option>
          <option value="QLD">Queensland</option>
          <option value="VIC">Victoria</option>
          <option value="WA">Western Australia</option>
          <option value="NT">Northern Territory</option>
          <option value="SA">South Australia</option>
          <option value="ACT">ACT</option>
          <option value="TAS">Tasmania</option>
        </FormControl>
      </Form>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredListings.map((listing, index) => (
          <tr key={index}>
            <td>{listing.title}</td>
            <td>{listing.location}</td>
            <td>
              <Link to={`/jobs/${listing._id}/edit-listing`}>
                <Button variant="primary" edit='true'>Edit</Button>
              </Link>
              {/* <Button variant="primary">Delete</Button> */}
              <Button variant="primary" href='/jobs/${listing.id}'applicants='true'>View Applicants</Button>
            </td>
          </tr>
          ))}
          {/* add more job postings */}
        </tbody>
      </table>
      <hr></hr>
      {/* Applications */}
      <h2>Applications</h2>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Applicant</th>
            <th>Contact</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dashboardApplications.map((application, index) => (
            <tr key={index}>
              <td>{application.listing.title}</td>
              <td>{application.applicant.name}</td>
              <td>{application.applicant.email}</td>
              <td>{application.status}</td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployerDashboard
