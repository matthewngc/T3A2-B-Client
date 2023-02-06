import React from "react";
import { render } from "@testing-library/react";
import Footer from "./src/components/Footer";

describe("Footer component", () => {
    // Tests to render the component and to test that the correct text is present
  test("renders copyright text and navigation links", () => {
    const { getByText } = render(<Footer />);

    const copyright = getByText(/\u00A9 \d{4} - Steve's Jobs/i);
    const termsOfUse = getByText(/Terms of Use/i);
    const privacy = getByText(/Privacy Policy/i);
    const contactUs = getByText(/Contact Us/i);

    expect(copyright).toBeDefined();
    expect(termsOfUse).toBeDefined();
    expect(privacy).toBeDefined();
    expect(contactUs).toBeDefined();
  });
});
