import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams, useNavigate } from 'react-router-dom'
import EmployerDashboard from './EmployerDashboard'
import JobListingsPage from './JobListingsPage'
import JobPostingPage from './JobPostingPage'
import JobSeekerDashboard from './JobSeekerDashboard'
import NavBar from "./NavBar";
import CreateListing from './ListingForm'
import EditListing from './EditListing'
import LandingPage from './LandingPage'
// import LoginPage from './LoginPage'
import Footer from './Footer'
import TermsOfUse from './TermsOfUse'
import PrivacyPolicy from './Privacy'
import ContactUs from './Contact'
import Login from './LoginPage'
import Application from './Application'
import PageNotFound from './PageNotFound'
import SessionExpired from './SessionExpired'

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

    const [applications, setApplications] = useState([])
    useEffect(() => {
      async function getApplications() {
        const res = await fetch('http://localhost:4002/applications')
        const data = await res.json()
        setApplications(data)
    }
    getApplications()

  }, [])


  // Higher Order Components
  const JobPostingPageWrapper = () => {
    const { id } = useParams()
    const listing = jobListings.find(listing => listing._id == id)
    console.log(jobListings)
    console.log(listing)
    return listing ? <JobPostingPage listing={listing} submitApplication={submitApplication} /> : <h4>Job Listing not found!</h4>
  }

  const EditListingWrapper = () => {
    const { id } = useParams()
    const listing = jobListings.find(listing => listing._id == id)
    const isEdit = true
    return listing ? <EditListing listing={listing} isEdit={isEdit} editListing={editListing} deleteListing={deleteListing}/> : <h4>Job Listing not found</h4>
  }

  // Login user
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
    // console.log(returnedUser)
    const userObject = await returnedUser.json()
    // console.log(userObject)
    console.log(userObject.token)
    if (userObject.id) {
      sessionStorage.setItem('name', userObject.name)
      sessionStorage.setItem('company', userObject.company)
      sessionStorage.setItem('email', userObject.email)
      sessionStorage.setItem('id', userObject.id)
      sessionStorage.setItem('token', userObject.token)
      sessionStorage.setItem('mobile', userObject.mobile)
      sessionStorage.setItem('isEmployer', userObject.isEmployer)
      // userSessionKeys({
      //   email: userObject.email,
      //   id: userObject.id,
      //   token: userObject.token
      // })
    }
    console.log(userObject.isEmployer)
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

  // Register user
  const registerUser = async (name, company, email, password, isEmployer, mobile) => {
    try {
      const newUser = {
        name: name,
        company: company,
        email: email,
        password: password,
        isEmployer: isEmployer,
        // location: location,
        mobile: mobile
      }
      console.log(newUser)
      const returnedUser = await fetch('http://localhost:4002/auth/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        'body': JSON.stringify(newUser)
      })
      console.log(returnedUser)
      const returnedObject = await returnedUser.json()
      console.log(returnedObject)
      if (!returnedObject.error) {
        sessionStorage.setItem('name', returnedObject.name)
        sessionStorage.setItem('company', returnedObject.company)
        sessionStorage.setItem('email', returnedObject.email)
        sessionStorage.setItem('id', returnedObject.id)
        sessionStorage.setItem('token', returnedObject.token)
        sessionStorage.setItem('mobile', returnedObject.mobile)
        sessionStorage.setItem('isEmployer', returnedObject.isEmployer)
        console.log(sessionStorage)
        if (returnedObject.isEmployer) {
          nav('/employer-dashboard')
        } else {
          nav('/job-seeker-dashboard')
        }
      } else {
        console.log(returnedObject.error)
      }
    }
  catch (err) {
    console.log(err.message)
  }
}

  // const logoutUser = async ()


  // Jobseeker & Employer dashboard
  const [dashboardApplications, setDashboardApplications] = useState([])
  const [dashboardListings, setDashboardListings] = useState([])

  async function getDashboardApplications() {
    const res = await fetch('http://localhost:4002/applications/dashboard', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'authorization': 'Bearer ' + sessionStorage.token
      }
    })
    const data = await res.json()
    console.log(data)
    setDashboardApplications(data)
  }

  if (sessionStorage.isEmployer &&! JSON.parse(sessionStorage.isEmployer)) {
    useEffect(() => {
      getDashboardApplications()
    }, [])
  } else {
      // Employer dashboard
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
        getDashboardApplications()
      }, [])
  }

  // Create Listing
  const submitListing = async (title,description,company,location,education,experience) => {
    try {
      const newListing = {
        author: sessionStorage.id,
        title: title,
        description: description,
        company: company,
        location: location,
        education: education,
        experience: experience
      }
      console.log(newListing)
      const returnedListing = await fetch('http://localhost:4002/jobs', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'authorization': 'Bearer ' + sessionStorage.token
        },
        'body': JSON.stringify(newListing)
      })
      console.log(returnedListing) 
      console.log(returnedListing.status)
      const returnedObject = await returnedListing.json()
      console.log(returnedObject)
      // if (returnedListing.status === 403) {
      //   logoutmember()
      //   nav('/jwt-expired')
      // } else 
      // {
      jobListings.unshift(returnedObject)
      dashboardListings.unshift(returnedObject)

      // setJobListings(...jobListings, returnedObject)
      nav(`/jobs/${returnedObject._id}`)
      // }

     }
     catch (err) {
      console.log(err.message)
     }
  }

    const editListing = async (listing, title, description, company, location, education, experience) => {
      try {
        const editListing = {
          title: title,
          description: description,
          company: company,
          location: location,
          education: education,
          experience: experience
        }

        const returnedListing = await fetch(`http://localhost:4002/jobs/${listing._id}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.token
          },
          'body': JSON.stringify(editListing)
        })

        const returnedObject = await returnedListing.json()

        //  if (returnedListing.status === 403) {
        //   logoutMember()
        //   nav('/jwt-expired')
        //  } else {
        const targetListingId = listing._id

        const listingIndex = jobListings.findIndex(listing => targetListingId == listing._id)

        jobListings.splice(listingIndex, 1, returnedObject)
        dashboardListings.splice(listingIndex, 1, returnedObject)
        setJobListings(jobListings)
        setDashboardListings(dashboardListings)
        console.log(setDashboardListings(dashboardListings))

      //  window.scrollTo(0,0)
        nav(`/jobs/${targetListingId}`)
      }
      // }
      catch (err) {
        console.log(err.message)
      }

    }

    const deleteListing =  async (listing) => {

      try {
        const returnedPost = await fetch(`http://localhost:4002/jobs/${listing._id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + sessionStorage.token
          }
        })
        // if (returnedListing.status === 403) {  
        //   logoutMember()
        //   nav('/jwt-expired')
        // } else {
        const targetListingId = listing._id
        const listingIndex = jobListings.findIndex(listing => targetListingId == listing._id)
        jobListings.splice(listingIndex, 1)
        dashboardListings.splice(listingIndex, 1)
        setJobListings(jobListings)
        setDashboardListings(dashboardListings)
        nav('/employer-dashboard')
        
      }
      catch (err){
        console.log(err.message)
      }
    
    }

    const submitApplication = async (listing) => {
      console.log(listing)
      try {
        const newApplication = {
          listing: listing._id,
        }
        const returnedApplication = await fetch(`http://localhost:4002/applications`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.token
          },
          'body': JSON.stringify(newApplication)
        })
        console.log(returnedApplication)
        const returnedObject = await returnedApplication.json()
        dashboardApplications.unshift(returnedObject)
        setDashboardApplications(dashboardApplications)
        
        nav(`/job-seeker-dashboard`)
      }
      catch (err) {
        console.log(err.message)
      }
    }

    const editApplicationStatus = async (status, application) => {
      try {
        const newStatus = {
          status: status
        }
        console.log(newStatus)
        console.log(application._id)
        const returnedStatus = await fetch(`http://localhost:4002/applications/${application._id}`, {
          method: 'PUT',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + sessionStorage.token
          },
          'body': JSON.stringify(newStatus)
        })
        // if (!returnedStatus.ok) {
        //   throw new Error(`HTTP error! status: ${returnedStatus.status}`)
        // }
        const returnedObject = await returnedStatus.json()
        console.log(returnedObject)
        const targetApplicationId = application._id
        const applicationIndex = applications.findIndex(application => targetApplicationId == application._id)
        dashboardApplications.splice(applicationIndex, 1, returnedObject)
      }
      catch (err) {
        console.log(err.message)
      }
    }

    const deleteApplication =  async (application) => {

      try {
        console.log(application)
        const returnedApplication = await fetch(`http://localhost:4002/applications/${application._id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + sessionStorage.token
          }
        })
        console.log(returnedApplication)
        // if (returnedListing.status === 403) {  
        //   logoutMember()
        //   nav('/jwt-expired')
        // } else {
        const targetListingId = application._id
        const applicationIndex = applications.findIndex(application => targetListingId == application._id)
        applications.splice(applicationIndex, 1)
        dashboardApplications.splice(applicationIndex, 1)
        setApplications(applications)
        setDashboardApplications(dashboardApplications)
        nav('/employer-dashboard')
        
      }
      catch (err){
        console.log(err.message)
      }
    }



  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/jobs' element={<JobListingsPage jobListings={jobListings}/>} />
        <Route path='/jobs/:id' element={<JobPostingPageWrapper />} />
        <Route path='/job-seeker-dashboard' element={<JobSeekerDashboard dashboardApplications={dashboardApplications} userDetails={sessionStorage}/>} />
        <Route path='/employer-dashboard' element={<EmployerDashboard 
                                                      dashboardListings={dashboardListings} 
                                                      deleteListing={deleteListing} 
                                                      dashboardApplications={dashboardApplications} 
                                                      userDetails={sessionStorage} 
                                                      editApplicationStatus={editApplicationStatus}
                                                      deleteApplication={deleteApplication} />} /> 
        <Route path='/login' element={<Login userLogin={userLogin} registerUser={registerUser}/>} />
        <Route path='/create-listing'
               element ={
               <CreateListing 
               
               submitListing={submitListing}
               />
               } 
               />
        <Route path='/jobs/:id/edit-listing' element ={<EditListingWrapper editListing={editListing}/>} />
        <Route path='/terms-of-use' element ={<TermsOfUse />} />
        <Route path='/privacy' element ={<PrivacyPolicy />} />
        <Route path='/contact' element ={<ContactUs />} />
        <Route path='/pagenotfound' element ={<PageNotFound />} />
        <Route path='/session-expired' element ={<SessionExpired />} />
      </Routes>
      <Footer />
    </>
  )
}


export default App