import React from 'react'
import ListingForm from './ListingForm'

const EditListing = ({listing, editListing, isEdit, deleteListing }) => {

  function submitDelete(evt) {
    evt.preventDefault()
    deleteListing(listing)
  }

  return (
    <>
        <div>
            {/* <header>
                headingText={'Edit Listing'}
            </header> */}
            <ListingForm listing={listing} editListing={editListing} isEdit={isEdit} />
            <button onClick ={submitDelete}>Delete Listing</button>
            </div>
    </>
  )
}


export default EditListing