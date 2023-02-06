import React from "react";
import { render } from "@testing-library/react";
import JobSeekerDashboard from "./src/components/JobSeekerDashboard";

const mockApplications = [
  {
    listing: {
      title: "Software Engineer"
    },
    status: "Pending"
  },
  {
    listing: {
      title: "UI/UX Designer"
    },
    status: "Accepted"
  }
];

const mockUserDetails = {
  name: "Timothy Nguyen",
  email: "timothy@example.com",
  mobile: "0400000000"
};

describe("JobSeekerDashboard component", () => {
//   After rendering the page it finds the elements in the output to see if the correct information is rendered
    test("renders correct information", () => {
        const { getByText } = render(
        <JobSeekerDashboard
            dashboardApplications={mockApplications}
            userDetails={mockUserDetails}
        />
        );

        const welcomeMessage = getByText(/Welcome back, Timothy Nguyen!/i);
        const tableHeaders = [ getByText(/Job Title/i),
                                getByText(/Status/i),
                                getByText(/Action/i)
        ];

        const softwareEngineerRow = getByText(/Software Engineer/i);
        const uiUxDesignerRow = getByText(/UI\/UX Designer/i);
        const profileInformationHeader = getByText(/Profile Information/i);
        const profileInformation = [
        getByText(/Name: Timothy Nguyen/i),
        getByText(/Email: timothy@example.com/i),
        getByText(/Mobile: 0400000000/i)
        ];
        const editProfileButton = getByText(/Edit Profile/i);

        expect(welcomeMessage).toBeDefined();
        tableHeaders.forEach(header => expect(header).toBeDefined());
        expect(softwareEngineerRow).toBeDefined();
        expect(uiUxDesignerRow).toBeDefined();
        expect(profileInformationHeader).toBeDefined();
        profileInformation.forEach(info => expect(info).toBeDefined());
        expect(editProfileButton).toBeDefined();
    });
});
