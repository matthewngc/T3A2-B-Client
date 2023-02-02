import React from 'react'

const JobPostingPage = () => {
  return (
    <div>
      <h1>Job Posting Page</h1>
      <p>Displays the details of a selected job posting</p>
      {/* job description */}
      <h2>Job Description</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vel nisi tincidunt consectetur. Sed dictum, odio eu varius placerat, lectus libero tempor nisl, vel congue velit mauris a urna.</p>
      {/* job requirements */}
      <h2>Requirements</h2>
      <ul>
        <li>Bachelor's degree in relevant field</li>
        <li>5+ years of experience</li>
        <li>Strong communication skills</li>
        <li>Ability to work independently and as part of a team</li>
      </ul>
      {/* application button */}
      <button>Apply</button>
    </div>
  );
};

export default JobPostingPage