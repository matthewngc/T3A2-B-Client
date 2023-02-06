import React from 'react'
import { useNavigate } from 'react-router-dom';
import './styles/JobPostingPage.css'

const JobPostingPage = ({ listing, submitApplication }) => {

  const nav = useNavigate()

  return (
  <>
    <div className="JobPostingPage">
      <h1>{listing.title}</h1>
      <p>{listing.location}</p>
      <h2>Job Description</h2>
      <p>{listing.description}</p>
      <h2>Requirements</h2>
      <ul>
        <li>{listing.education}</li>
        <li>{listing.experience} years of prior experience</li>
      </ul>
      <button onClick={() => JSON.parse(sessionStorage.isEmployer ? nav('/access-denied') : submitApplication(listing))}>Apply</button>
    </div>
  </>
  );
};

export default JobPostingPage