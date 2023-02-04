import React from 'react'
import './styles/JobPostingPage.css'

const JobPostingPage = ({ listing }) => {
  return (
  <>
    <div className="JobPostingPage">
      <h1>{listing.title}</h1>
      <p>{listing.location}</p>
      {/* job description */}
      <h2>Job Description</h2>
      <p>{listing.description}</p>
      {/* job requirements */}
      <h2>Requirements</h2>
      <ul>
        <li>{listing.education}</li>
        <li>{listing.experience}</li>
        <li>Strong communication skills</li>
        <li>Ability to work independently and as part of a team</li>
      </ul>
      {/* application button */}
      <button>Apply</button>
    </div>
  </>
  );
};

export default JobPostingPage