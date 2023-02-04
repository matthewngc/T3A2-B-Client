import React from 'react'

const EditListing = () => {
  return (
        <>
        <h2>Edit Listing</h2>
    
        <form className="row g-3">
      <div className="col-md-4">
        <label for="validationDefault01" className="form-label">Job Title</label>
        <input type="text" className="form-control" id="validationDefault01" value="" required></input>
      </div>
      <div className="col-md-4">
        <label for="validationDefault02" className="form-label">Company</label>
        <input type="text" className="form-control" id="validationDefault02" value="" required></input>
      </div>
      <div className="col-md-4">
        <label for="validationDefaultUsername" className="form-label">Contact Email</label>
        <div className="input-group">
          <span className="input-group-text" id="inputGroupPrepend2">@</span>
          <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required></input>
        </div>
      </div>
      <div className="col-md-3">
        <label for="validationDefault04" className="form-label">Employment Type</label>
        <select className="form-select" id="validationDefault04" required>
          <option selected disabled value="">Choose...</option>
          <option>Full-time</option>
          <option>Part-Time</option>
          <option>Casual</option>
        </select>
      </div>
      <div className="col-md-3">
        <label for="validationDefault04" className="form-label">State</label>
        <select className="form-select" id="validationDefault04" required>
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
      <div className="col-md-3">
        <label for="validationDefault05" className="form-label">Postcode</label>
        <input type="text" className="form-control" id="validationDefault05" required></input>
      </div>
      <div>
      <label for="validationDefault05" className="form-label">Requirements</label>
      <textarea className='form-control' rows= '10'></textarea>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit listing</button>
      </div>
    </form>
        </>
      )
    }
  

export default EditListing