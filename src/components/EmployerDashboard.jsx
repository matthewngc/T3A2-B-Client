import React from 'react'
import { Button } from "react-bootstrap";

const EmployerDashboard = () => {
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
            <th>Job Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Software Developer</td>
            <td>Full Time</td>
            <td>
              <Button variant="primary" href='/jobs/${listing.id}'edit>Edit</Button>
              <Button variant="primary">Delete</Button>
              <Button variant="primary" href='/jobs/${listing.id}'applicants>View Applicants</Button>
            </td>
          </tr>
          {/* add more job postings */}
        </tbody>
      </table>
      <hr></hr>
      {/* employer information */}
      <h2>Employer Information</h2>
      <ul>
        <li>
          <p>Name: [Employer Name]</p>
          <p>Email: [Employer Email]</p>
          <p>Number: [Employer Number]</p>
        </li>
      </ul>
      <Button variant="primary">Edit Information</Button>
    </div>
  );
};

export default EmployerDashboard
