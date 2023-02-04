import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom'
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
import Login from './LoginPage'

const App = () => {
  const nav = useNavigate()

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

  // Login
  const userLogin = async (email, password) => {
    try {
      const user = {
        email: email,
        password: password
      }

    const returnedUser = await fetch('http://localhost:4002/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      'body': JSON.stringify(user)
    })
    console.log(returnedUser)
    const userObject = await returnedUser.json()
    console.log(userObject)
    if (userObject.id) {
      sessionStorage.setItem('company', userObject.company)
      sessionStorage.setItem('email', userObject.email)
      sessionStorage.setItem('id', userObject.id)
      sessionStorage.setItem('token', userObject.token)

      // userSessionKeys({
      //   email: userObject.email,
      //   id: userObject.id,
      //   token: userObject.token
      // })
    }
    if (userObject.isEmployer) {
      nav('/employer-dashboard')
    } else {
      nav('/job-seeker-dashboard')
    }
  }
  catch (err) {
    console.log(err.message)
  }
  }


  // Employer dashboard
  const [dashboardListings, setDashboardListings] = useState([])
  useEffect(() => {
    async function getDashboardListings() {
      const res = await fetch('http://localhost:4002/jobs/dashboard', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'authorization': 'Bearer ' + sessionStorage.token
        }
      })
      const data = await res.json()
      console.log(data)
      setDashboardListings(data)
    }
    getDashboardListings()
  }, [])


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/jobs' element={<JobListingsPage jobListings={jobListings}/>} />
        <Route path='/jobs/:id' element={<JobPostingPageWrapper />} />
        <Route path='/employer-dashboard' element={<EmployerDashboard dashboardListings={dashboardListings} userDetails={sessionStorage}/>} />
        <Route path='/job-seeker-dashboard' element={<JobSeekerDashboard />} />
        <Route path='/login' element={<Login userLogin={userLogin}/>} />
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