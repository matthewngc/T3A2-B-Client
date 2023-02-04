import React from 'react'
import { Button } from "react-bootstrap";

const EmployerDashboard = ({ dashboardListings, userDetails }) => {
  console.log(userDetails)
  return (
    <div>
      <h1>Employer Dashboard</h1>
      <hr></hr>

      <Button variant="primary" href='/create-listing'>Create new listing</Button>
      <hr></hr>
      {/* job postings */}
      <h2>Jobs Posted</h2>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dashboardListings.map((listing, index) => (
          <tr key={index}>
            <td>{listing.title}</td>
            <td>{listing.location}</td>
            <td>
              <Button variant="primary" href='/jobs/${listing.id}'edit='true'>Edit</Button>
              <Button variant="primary">Delete</Button>
              <Button variant="primary" href='/jobs/${listing.id}'applicants='true'>View Applicants</Button>
            </td>
          </tr>
          ))}
          {/* add more job postings */}
        </tbody>
      </table>
      <hr></hr>
      {/* employer information */}
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
  );
};

export default EmployerDashboard
