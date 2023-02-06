import React from "react";
import { Link } from "react-router-dom";
import './styles/PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <h1>404 Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
      <Link to='/'>Back to Home</Link>
    </div>
  );
};

export default PageNotFound;
