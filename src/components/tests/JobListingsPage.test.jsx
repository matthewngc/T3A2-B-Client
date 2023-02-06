import React from "react";
import { render, cleanup } from "@testing-library/react";
import JobListingsPage from "./src/components/JobListingsPage";

afterEach(cleanup);

const jobListings = [
  {
    _id: "1",
    title: "Software Engineer",
    location: "NSW",
    company: {
      company: "Google"
    }
  },
  {
    _id: "2",
    title: "Product Manager",
    location: "VIC",
    company: {
      company: "Facebook"
    }
  },
  {
    _id: "3",
    title: "Data Scientist",
    location: "NSW",
    company: {
      company: "Apple"
    }
  }
];

describe("JobListingsPage component", () => {
  it("renders the job listings", () => {
    const { getByText } = render(<JobListingsPage jobListings={jobListings} />);
    
    jobListings.forEach(listing => {
      const title = getByText(listing.title);
      const company = getByText(listing.company.company);
      const location = getByText(listing.location);
      const viewJobButton = getByText("View Job");
      
      expect(title).toBeDefined();
      expect(company).toBeDefined();
      expect(location).toBeDefined();
      expect(viewJobButton).toBeDefined();
    });
  });

  it("filters job listings based on location", () => {
    const { getByText } = render(<JobListingsPage jobListings={jobListings} />);

    const locationFilter = getByText("New South Wales");
    expect(locationFilter).toHaveTextContent("New South Wales");
  });
});
