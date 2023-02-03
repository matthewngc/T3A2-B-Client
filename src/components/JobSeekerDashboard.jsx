import React from 'react';

const JobSeekerDashboard = () => {
  const jobListings = [
    { title: "Software Engineer", status: "Pending" },
    { title: "Data Analyst", status: "Accepted" },
    { title: "UX Designer", status: "Rejected" },
  ];

  return (
    <div>
      <h1>Job Seeker Dashboard</h1>
      <p>Welcome back, ...!</p>
      {/* application status */}
      <h2>Applications:</h2>
      <table>
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobListings.map((listing, index) => (
            <tr key={index}>
              <td>{listing.title}</td>
              <td>{listing.status}</td>
              <td>
                <button>View Job Listing</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* profile information */}
      <h2>Profile Information</h2>
      <div>
        <p>Name: Timothy Nguyen</p>
        <p>Email: timmy@email.com</p>
        <p>Location: Sydney, NSW</p>
      </div>
      <button>Edit Profile</button>
    </div>
  );
};

export default JobSeekerDashboard;
