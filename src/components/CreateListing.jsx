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
    <form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Job Title</label>
    <input type="text" class="form-control" id="validationDefault01" value="" required></input>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Company</label>
    <input type="text" class="form-control" id="validationDefault02" value="" required></input>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Contact Email</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required></input>
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">Employment Type</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>Full-time</option>
      <option>Part-Time</option>
      <option>Casual</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>NSW</option>
      <option>QLD</option>
      <option>VIC</option>
      <option>WA</option>
      <option>SA</option>
      <option>TAS</option>
      <option>ACT</option>
      <option>NT</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Postcode</label>
    <input type="text" class="form-control" id="validationDefault05" required></input>
  </div>
  <div>
  <label for="validationDefault05" class="form-label">Requirements</label>
  <textarea className='form-control' rows= '10'></textarea>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit listing</button>
  </div>
</form>
    </>
  )
}

export default CreateListing