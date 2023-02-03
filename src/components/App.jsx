import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EmployerDashboard from './EmployerDashboard'
import JobListingsPage from './JobListingsPage'
import JobPostingPage from './JobPostingPage'
import JobSeekerDashboard from './JobSeekerDashboard'
import NavBar from "./NavBar";
import CreateListing from './CreateListing'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/jobs' element={<JobListingsPage />} />
        <Route path='/jobs/:id' element={<JobPostingPage />} />
        <Route path='/employer-dashboard' element={<EmployerDashboard />} />
        <Route path='/job-seeker-dashboard' element={<JobSeekerDashboard />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/create-listing' element ={<CreateListing />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App