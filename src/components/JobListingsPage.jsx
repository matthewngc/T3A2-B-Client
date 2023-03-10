import React, { useState } from "react";
import './styles/JobListingsPage.css'
import { Table, Button, Form, FormControl } from "react-bootstrap";

const JobListingsPage = ({ jobListings }) => {
  const [locationFilter, setLocationFilter] = useState("");

  const handleLocationFilter = (event) => {
    setLocationFilter(event.target.value);
  };

  const filteredListings = jobListings.filter(
    (listing) => listing.location === locationFilter || locationFilter === ""
  );

  return (
    <div className='JobListingsPage'>
      <h1 className="text-center m-5">Job Listings</h1>
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredListings.map((listing, index) => (
            <tr key={index}>
              <td>{listing.title}</td>
              <td>{listing.company.company}</td>
              <td>{listing.location}</td>
              <td>
                <Button variant="primary" href={`/jobs/${listing._id}`}>View Job</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default JobListingsPage;
