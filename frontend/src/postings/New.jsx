import React, { useState } from "react";

function CreatePosting() {
    const [input, setInput] = useState({
        parentName: '',
        contactNumber: '',
        contactEmail: '',
        numberOfChildren: '',
        ageOfChildren: '',
        date: '',
        time: '',
        location: 'New York City'
    })

    function handleChange(event){
        const {name, value} = event.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        console.log(input)

    }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="parentName"
          value={input.parentName}
          autoComplete="off"
          placeholder="Your Name"
        />
         <input
          onChange={handleChange}
          name="contactNumber"
          value={input.contactNumber}
          autoComplete="on"
          placeholder="Phone Number"
        />
         <input
          onChange={handleChange}
          name="contactEmail"
          value={input.contactEmail}
          autoComplete="on"
          placeholder="Email address"
        />
        <input
          onChange={handleChange}
          name="numberOfChildren"
          value={input.numberOfChildren}
          autoComplete="off"
          placeholder="Number of Children"
        />
        <input
          onChange={handleChange}
          name="ageOfChildren"
          value={input.ageOfChildren}
          autoComplete="off"
          placeholder="Age of Children"
        />
        <input
          onChange={handleChange}
          name="date"
          value={input.date}
          autoComplete="off"
          placeholder="Date needed"
        />
        <input
          onChange={handleChange}
          name="time"
          value={input.time}
          autoComplete="off"
          placeholder="Time needed"
        />
        <select name="location"  value={input.location} onChange={handleChange}>
        <option value="DEFAULT" disabled>Choose a city</option>
          <option value="NYC">New York City</option>
          <option value="HVA">Hampton, VA</option>
          <option value="Coleman">Coleman, Ohio</option>
        </select>
        <button onClick={handleClick}>Create Posting</button>
      </form>
      <h1>If you have any questions please contact us!</h1>
    </div>
  );
}
export default CreatePosting;
