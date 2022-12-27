import React, { useState } from "react";

function CreatePosting() {
    const [input, setInput] = useState({
        parentName: '',
        contactNumber: '',
        contactEmail: '',
        numberOfChildren: '',
        ageOfChildren: '',
        date: '',
        location: 'NYC'
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
        <h2>Name:</h2>
        <input
          onChange={handleChange}
          name="parentName"
          value={input.parentName}
          autoComplete="off"
          placeholder="Your Name"
          required="true"
        />
        <h2>Phone Number:</h2>
         <input
          onChange={handleChange}
          name="contactNumber"
          value={input.contactNumber}
          autoComplete="on"
          placeholder="Phone Number"
          required
        />
        <h2>Email:</h2>
         <input
          onChange={handleChange}
          name="contactEmail"
          type="email"
          value={input.contactEmail}
          autoComplete="on"
          placeholder="Email address"
        />
        <h2>Number of Children:</h2>
        <input
          onChange={handleChange}
          name="numberOfChildren"
          type="number"
          min="1"
          value={input.numberOfChildren}
          autoComplete="off"
          placeholder="Number of Children"
        />
        <h2>Age of Children:</h2>
        <input
          onChange={handleChange}
          name="ageOfChildren"
          min="2023-01-01T00:00"
          value={input.ageOfChildren}
          autoComplete="off"
          placeholder="Age of Children"
          required
        />
        <h2>Date & Time:</h2>
        <input
          onChange={handleChange}
          name="date"
          type={"datetime-local"}
          value={input.date}
          autoComplete="off"
          placeholder="Date needed"
        />
        <h2>Location:</h2>
        <select name="location"  value={input.location} onChange={handleChange}>
        <option value="DEFAULT" disabled>Choose a city</option>
          <option value="NYC">New York City</option>
          <option value="HVA">Hampton, VA</option>
          <option value="Coleman">Coleman, Ohio</option>
        </select> <br /><br />
        <button onClick={handleClick}>Create Posting</button>
      </form>
      <h1>If you have any questions please contact us!</h1>
    </div>
  );
}
export default CreatePosting;
