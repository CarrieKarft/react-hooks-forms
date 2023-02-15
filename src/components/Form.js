import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handelFirstNameChange(event) {
    setFirstName(event.target.value)
  }

  function handelLastNameChange(event) {
    setLastName(event.target.value)
  }

  return (
    <form>
      <input type="text" onChange={handelFirstNameChange} value={firstName} />
      <input type="text" onChange={handelLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
