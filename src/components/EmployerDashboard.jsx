import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, FormControl } from "react-bootstrap";
import './styles/EmployerDashboard.css'
import { useNavigate } from 'react-router-dom';


const EmployerDashboard = ({ dashboardListings, deleteListing, dashboardApplications, userDetails, editApplicationStatus, deleteApplication }) => {
  console.log(userDetails)
  console.log(dashboardListings)
  console.log(dashboardApplications)

  const nav = useNavigate()
  useEffect(() => {
  if (!JSON.parse(sessionStorage.isEmployer)) {
    nav('/pagenotfound')
  }
  })

  const [locationFilter, setLocationFilter] = useState("");
  // const [applicationStatus, setApplicationStatus] = useState("")

  const handleLocationFilter = (event) => {
    setLocationFilter(event.target.value);
  };

  const filteredListings = dashboardListings.filter(
    (listing) => listing.location === locationFilter || locationFilter === ""
  );

  const [status, setStatus] = useState("")

  function updateStatus(evt, application) {
    // evt.preventDefault()
    console.log(status)
    editApplicationStatus(status, application)
  }
  // function changeStatus(evt) {
  //   evt.preventDefault()
  //   editApplicationStatus(status)
  // }

  return (
    <div className='EmployerDashboard'>
      <h1>Employer Dashboard</h1>
            <div className='EmployerInformation'>
        <h2>Employer Information</h2>
        <ul>
          <li>
            <p>Name: {userDetails.company}</p>
            <p>Email: {userDetails.email}</p>
          </li>
        </ul>
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
              <Button onClick={() => deleteListing(listing)} variant="primary">Delete</Button>
              {/* <Button variant="primary" href='/jobs/${listing.id}'applicants='true'>View Applicants</Button> */}
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
              <td>{null ? '' : application.listing.title}</td>
              <td>{null ? '' : application.applicant.name}</td>
              <td>{null ? '' : application.applicant.email}</td>
              <td>{null ? '' : application.status}</td>
              <td>
                <form onSubmit={(evt) => updateStatus(evt,application)}>
                <select 
                  className="form-control mt-1"
                  onChange={(event) => setStatus(event.target.value)}
                >
                  <option>Change Status</option>
                  <option value="Pending">Pending</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Shortlisted">Shortlisted</option>
                </select>
                <button type="submit">Update Status</button>
                </form>
                <button onClick={() => deleteApplication(application)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployerDashboard
