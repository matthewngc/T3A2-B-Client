import React from 'react'
import ListingForm from './ListingForm'
import header from './header'

const CreateListing = ({submitListing}) => {

  return (
    <>
        <div>
            <header>
                <h1>New Listing</h1>
            </header>
            <ListingForm submitListing={submitListing} />
        </div>
    </>
  )
}

export default CreateListing