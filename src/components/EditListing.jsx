import React from 'react'
import ListingForm from './ListingForm'

const EditListing = ({editListing}) => {
  return (
    <>
        <div>
            {/* <header>
                headingText={'Edit Listing'}
            </header> */}
            <ListingForm editListing={editListing} />
        </div>
    </>
  )
}
  

export default EditListing