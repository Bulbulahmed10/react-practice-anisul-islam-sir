// import React, { Component } from "react";
// import HomePage from "./HomePage";
// import LogInPage from "./LogInPage";
// export default class Main extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       islogin: false,
//     };
//   }

// render() {
// if (this.state.islogin) {
//   return <HomePage />;
// } else {
//   return <LogInPage />;
// }

//!way 2

//     const {islogin} = this.state

//     let element;

//     element = islogin ? <HomePage /> : <LogInPage />

//     return(
//       <div>
//         {element}
//       </div>
//     )

//   }
// }

//! event handler onchange

// import React, { Component } from 'react'

// export default class Main extends Component {

//   constructor(props) {
//     super(props)

//     this.state = {
//        changeValue : ""
//     }
//   }

//   eventhandler = (e) => {
//     this.setState({
//       changeValue: e.target.value
//     })
//   }
//   render() {

//     return (
//       <div>
//         <input type="text" onChange={this.eventhandler} />
//         <h1> {this.state.changeValue} </h1>
//       </div>
//     )
//   }
// }

//! React Hooks, useState hook

// import React, {useState} from "react";

// export default function HooksuseState() {

//   const [Count, setCount] = useState(0)
//   const handleIncrement = () => {
//     setCount(Count + 1)
//   }
//   return (
//     <div>
//       <h1>count: {Count} </h1>
//       <button onClick={handleIncrement}>Increment</button>
//     </div>
//   )
// }

//! dynamic styling in react with react useState hooks

import React, { useState, useEffect } from "react";

export default function Main() {
  const [name, setName] = useState("");
  const [inputValid, validFunc] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      validFunc(false);
    } else {
      validFunc(true);
    }
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        className={`${inputValid ? "validInput" : "InvalidInput"}`}
      />
    </div>
  );
}
