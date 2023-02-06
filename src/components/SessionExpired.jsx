import React from 'react'
import { Link } from 'react-router-dom'
import './styles/SessionExpired.css'

const SessionExpired = () => {
  return (
    <div className='session-expired'>
        <h1>Your session has expired!</h1>
        <h2>Please <Link to='/login'>log in</Link> again.</h2>
    </div>
  )
}

export default SessionExpired