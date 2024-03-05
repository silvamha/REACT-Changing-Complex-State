import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });

  const [isMouseOver, setMouseOver] = useState(false)
  const [isMouseOut, setMouseOut] = useState(false)

  function handleChange(event) {
    const { value, name } = event.target;

    setFullName(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lname: value
        };
      }
    });
  }

  function handleMouseOver(){
    setMouseOver(true)
    console.log("Mouse is roving over!")
  }

  function handleMouseOut(){
    setMouseOut(true)
    console.log("Mouse is out!!!!")
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.fName} {fullName.lName}
      </h1>
      <form>
        <input
          name="fName"
          onChange={handleChange}
          placeholder="First Name"
          value={fullName.fName}
        />
        <input
          name="lName"
          onChange={handleChange}
          placeholder="Last Name"
          value={fullName.lName}
        />
        <button style={{backgroundColor:isMouseOver? "black": "white"}}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>Submit</button>
      </form>
    </div>
  );
}

export default App;
