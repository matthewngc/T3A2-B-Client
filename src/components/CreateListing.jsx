import React, {useState} from 'react'
import {useParams} from 'react-router-dom'

const CreateListing = ({setListings, listings}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [company, setCompany] = useState('')
    const [location, setLocation] = useState('')
    const [education, setEducation] = useState('')
    const [experience, setExperience] = useState('')
    
    function submit(evt) {
        evt.preventDefault()

        // const newListing = {category: category, content: listing}
        // setListings([...listings, newListing])
    }

  return (
    <>
    <h2>Create New Listing</h2>

      <form className="row g-3" onSubmit={submit}>
      <div className="col-md-4">
          <label for="validationDefault01" className="form-label">Job Title</label>
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
          <label for="validationDefault02" className="form-label">Company</label>
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
           <label for="validationDefaultUsername" className="form-label">Experience</label>
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
     <div className="col-md-3">
           <label for="validationDefault04" className="form-label">Location</label>
           <select 
                  className="form-select" 
                  id="validationDefault04"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)} 
                  required >
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
         <label for="validationDefault05" className="form-label">Education</label>
         <input type="text"
                className="form-control" 
                id="validationDefault05" 
                value ={education}
                onChange={(event) => setEducation(event.target.value)}
                required>
         </input>
    </div>
    <div>
         <label for="validationDefault05" className="form-label">Description</label>
         <textarea className='form-control' 
         rows= '10'
                   value = {description}
                   onChange={(event) => setDescription(event.target.value)}
                   required
                   >
        </textarea>
    </div>
    <div className="col-12">
         <button className="btn btn-primary" type="submit">Submit listing</button>
  </div>
</form>
    </>
  )
}

export default CreateListing