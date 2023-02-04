import React from 'react'
import ListingForm from './ListingForm'

const CreateListing = ({submitListing}) => {
  return (
    <>
        <div>
            {/* <header>
                headingText={'Create New Listing'}
            </header> */}
            <ListingForm submitListing={submitListing} />
        </div>
    </>
  )
}

export default CreateListing