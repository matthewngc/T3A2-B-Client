import React, {useState} from 'react'
import './styles/ListingForm.css'

const ListingForm = ({submitListing, editListing, listing, isEdit}) => {

    const [title, setTitle] = useState(isEdit ? listing.title : '')
    const [description, setDescription] = useState(isEdit ? listing.description : '')
    const [company, setCompany] = useState(isEdit ? listing.company.company : '')
    const [location, setLocation] = useState(isEdit ? listing.location : '')
    const [education, setEducation] = useState(isEdit ? listing.education : '')
    const [experience, setExperience] = useState(isEdit ? listing.experience :'')
    
    function submitForm(evt) {
       evt.preventDefault()
       submitListing(title, description, company, location, education, experience)
    }

    function submitEdit(evt) {
       evt.preventDefault()
       editListing(listing, title, description, company, location, education, experience)
    }    

    const newListing = []
    

  return (
    <>
       <h2>{newListing} Listing</h2>
      <form className="row g-3" onSubmit={isEdit ? submitEdit : submitForm}>
      <div className="col-md-4">
          <label htmlFor="validationDefault01" className="form-label">Job Title</label>
          <input type="text"
                 className="form-control" 
                 id="validationDefault01" 
                 value={title}
                 onChange={(event) => setTitle(event.target.value)}
                 placeholder="Software Engineer" 
                 required
          />
      </div>
      <div className="col-md-4">
          <label htmlFor="validationDefault02" className="form-label">Company</label>
          <input type="text"
                 className="form-control" 
                 id="validationDefault02" 
                 value={company}
                 onChange={(event) => setCompany(event.target.value)} 
                 placeholder='Amazon'
                 required
          />
     </div>
     <div className="col-md-4">
           <label htmlFor="validationDefaultUsername" className="form-label">Experience</label>
     <div className="input-group">
           <input 
                 type="text" 
                 className="form-control" 
                 id="validationDefaultUsername"
                 value={experience}
                 onChange={(event) => setExperience(event.target.value)}  
                 aria-describedby="inputGroupPrepend2" 
                 required></input>
           <span className="input-group-text" id="inputGroupPrepend2">Years</span>
     </div>
     </div>
     <div className="col-md-4">
           <label htmlFor="validationDefault04" className="form-label">Location</label>
           <select 
                  className="form-select" 
                  id="validationDefault04"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)} 
                  required >
           <option default disabled value="">Choose...</option>
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
    <div className="col-md-4">
         <label htmlFor="validationDefault05" className="form-label">Education</label>
         <input type="text"
                className="form-control" 
                id="validationDefault05" 
                value ={education}
                onChange={(event) => setEducation(event.target.value)}
                required>
         </input>
    </div>
    <div className="col-md-4">
         <label htmlFor="validationDefault05" className="form-label">Description</label>
         <textarea className='form-control' 
         rows= '10'
                   value = {description}
                   onChange={(event) => setDescription(event.target.value)}
                   required
                   >
        </textarea>
    </div>
    <div className="col-md-4">
         <button className="btn btn-primary" type="submit">Submit listing</button>
  </div>
</form>
    </>
  )
}

export default ListingForm