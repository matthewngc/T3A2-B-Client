import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

const CreateListing = ({setListings, listings}) => {
    const [listing, setListing] = useState('')
    
    function submit(evt) {
        evt.preventDefault()

        const newListing = {category: category, content: listing}
        setListings([...listings, newListing])
    }

  return (
    <>
    <h2>Create New Listing</h2>
    <form>
        <div>
            <textarea></textarea>
        </div>
    </form>
    </>
  )
}

export default CreateListing