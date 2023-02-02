import React from 'react'

const JobSeekerDashboard = () => {
  return (
    <div>
      <h1>Job Seeker Dashboard</h1>
      <p>Accessible only to job seekers</p>
      {/* job postings */}
      <h2>Job Postings</h2>
      <ul>
        <li>
          <h3>Job Title</h3>
          <p>Job Description</p>
          <button>Apply</button>
        </li>
        {/* add more job postings */}
      </ul>
      {/* application status */}
      <h2>Application Status</h2>
      <ul>
        <li>
          <h3>Job Title</h3>
          <p>Status: Pending/Accepted/Rejected</p>
        </li>
        {/* add more application statuses */}
      </ul>
      {/* profile information */}
      <h2>Profile Information</h2>
      <form>
        {/* add form fields for profile information */}
        <button>Save Changes</button>
      </form>
    </div>
  );
};

export default JobSeekerDashboard