import React from 'react'
import { Link } from 'react-router-dom'
import './styles/AccessDenied.css'

const AccessDenied = () => {
  return (
    <div className='access-denied'>
        <h1>You do not have authorised access to this page!</h1>
    </div>
  )
}

export default AccessDenied