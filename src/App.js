//Data binding in React
//  Data binding in React can be achieved by using a controlled input. A controlled input is achieved by binding the value to a state variable and a onChange event to change the state as the input value changes.
import React, { useState } from 'react';
import './App.css';

function parent() {
  const [state, setState] = useState("world");

  function handleSubmit(e) {
    e.preventDefault();
   console.log(state)
  }
  return (
    <div className="head">
      <h1>hello {state}</h1>
      <form>
        <label>user details</label>
        <input
          type="text"
          value={state}
          
          onChange={(e) => {
            setState(e.target.value);
          }}
        ></input>

        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}
export default parent;
