import React from 'react'
import ListingForm from './ListingForm'

const EditListing = ({listing, editListing, isEdit }) => {
  return (
    <>
        <div>
            {/* <header>
                headingText={'Edit Listing'}
            </header> */}
            <ListingForm listing={listing} editListing={editListing} isEdit={isEdit} />
            <button>Delete Listing</button>
        </div>
    </>
  )
}


export default EditListing