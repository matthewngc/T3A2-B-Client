import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import EmployerDashboard from './EmployerDashboard'
import JobListingsPage from './JobListingsPage'
import JobPostingPage from './JobPostingPage'
import JobSeekerDashboard from './JobSeekerDashboard'
import NavBar from "./NavBar";
import CreateListing from './CreateListing'
import EditListing from './EditListing'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import Footer from './Footer'
import TermsOfUse from './TermsOfUse'
import PrivacyPolicy from './Privacy'
import ContactUs from './Contact'

const App = () => {

  const [jobListings, setJobListings] = useState([])
  useEffect(() => {
    async function getListings() {
      const res = await fetch('http://localhost:4002/jobs')
      const data = await res.json()
      setJobListings(data)
    }
    getListings()
  }, [])

  // Higher Order Components
  const JobPostingPageWrapper = () => {
    const { id } = useParams()
    const listing = jobListings.find(listing => listing._id == id)
    console.log(jobListings)
    console.log(listing)
    return listing ? <JobPostingPage listing={listing} /> : <h4>Job Listing not found!</h4>
  }

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/jobs' element={<JobListingsPage jobListings={jobListings}/>} />
        <Route path='/jobs/:id' element={<JobPostingPageWrapper />} />
        <Route path='/employer-dashboard' element={<EmployerDashboard />} />
        <Route path='/job-seeker-dashboard' element={<JobSeekerDashboard />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/create-listing' element ={<CreateListing />} />
        <Route path='/edit-listing' element ={<EditListing />} />
        <Route path='/terms-of-use' element ={<TermsOfUse />} />
        <Route path='/privacy' element ={<PrivacyPolicy />} />
        <Route path='/contact' element ={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}


export default App