import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/JobSeekerDashboard.css'

const JobSeekerDashboard = ({ dashboardApplications, userDetails }) => {

  const nav = useNavigate()
  useEffect(() => {
  if (JSON.parse(sessionStorage.isEmployer)) {
    nav('/access-denied')
  }
  })

  return (
    <div className="JobSeekerDashboard">
      <h1>Job Seeker Dashboard</h1>
      <p>Welcome back, {userDetails.name}!</p>
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
      <div className="ProfileInformation">
        <h2>Profile Information</h2>
        <div>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;
