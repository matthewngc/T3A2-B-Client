import React from 'react'
import ListingForm from './ListingForm'

const EditListing = () => {
  return (
        <>
        <div>
          <header>
            headingText={'Edit Listing'}
          </header>
          <ListingForm editListing={editListing} />
        </div>
        </>
      )
    }
  

export default EditListing