import React from 'react';

const JobSeekerDashboard = ({ dashboardApplications, userDetails}) => {
  // const jobListings = [
  //   { title: "Software Engineer", status: "Pending" },
  //   { title: "Data Analyst", status: "Accepted" },
  //   { title: "UX Designer", status: "Rejected" },
  // ];
  console.log(userDetails)
  console.log({ dashboardApplications })
  return (
    <div>
      <h1>Job Seeker Dashboard</h1>
      <p>Welcome back, {userDetails.name}!</p>
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
          {dashboardApplications.map((application, index) => (
            <tr key={index}>
              <td>{application.listing.title}</td>
              <td>{application.status}</td>
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
        <p>Name: {userDetails.name}</p>
        <p>Email: {userDetails.email}</p>
        <p>Mobile: {userDetails.mobile}</p>
      </div>
      <button>Edit Profile</button>
    </div>
  );
};

export default JobSeekerDashboard;
