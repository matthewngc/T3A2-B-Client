import React from "react";

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} - Steve's Jobs
      </p>
      <nav>
        <a href="/terms-of-use">Terms of Use</a>
        {" | "}
        <a href="/privacy-policy">Privacy Policy</a>
        {" | "}
        <a href="/contact">Contact Us</a>
      </nav>
    </footer>
  );
};

export default Footer;
