import React from 'react'
import { Link } from 'react-router-dom'

const SessionExpired = () => {
  return (
    <div>
        <h1>Your session has expired!</h1>
        <h2>Please <Link to='/login'>log in</Link> again.</h2>
    </div>
  )
}

export default SessionExpired