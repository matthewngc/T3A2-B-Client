import React from 'react'

const EmployerDashboard = () => {
  return (
    <div>
      <h1>Employer Dashboard</h1>
      <hr></hr>

      <button>Create new listing</button>
      <hr></hr>
      {/* job postings */}
      <h2>Job Postings</h2>
      <ul>
        <li>
          <h3>Job Title</h3>
          <p>Job Description</p>
          <button>Edit</button>
          <button>Delete</button>
        </li>
        {/* add more job postings */}
      </ul>
      <hr></hr>
      {/* applicants */}
      <h2>Applicants</h2>
      <ul>
        <li>
          <h3>Applicant Name</h3>
          <p>Applicant Email</p>
        </li>
        {/* add more applicants */}
      </ul>
    </div>
  );
};

export default EmployerDashboard