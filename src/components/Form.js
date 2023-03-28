import { useState } from 'react'

const Form = () => {
  const handleChange = (event) => {
    /*
            TODO - Logic for changing state based on form changes
        */
       this.useState({webName: event.target.value,});
  }

  const onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       this.useState.handleSubmit(useState);
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label for = "name">Name</label>
      <input
      type={"text"}
      value = {useState.webName}
      onChange = {handleChange}/>
      <label for = "URL">URL</label>
      <input
      type={"text"}
      value={useState.URL}
      onChange = {handleChange}/>
      <button>Submit</button>
      {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
    </form>
  )
}

export default Form
