import React from 'react'
import { Link } from 'react-router-dom'
import './styles/AccessDenied.css'

const AccessDenied = () => {
  return (
    <div className='permission-denied'>
        <h1>You do not have authorised access to this page!</h1>
        <h2>Please <Link to='/login'>log in</Link>.</h2>
    </div>
  )
}

export default AccessDenied