import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(
//       element,
//       document.getElementById('root')
//     );
//   }
  
//   setInterval(tick, 1000);

// function Clock(props) {
//     return (
//       <div>
//         <h1>Hello, world with clock()!</h1>
//         <h2>It is {props.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
  
//   function tick() {
//     ReactDOM.render(
//       <Clock date={new Date()} />,
//       document.getElementById('root')
//     );
//   }
  
//   setInterval(tick, 1000);

/*************************** 
* render either <LoginButton /> or <LogoutButton /> 
depending on its current state. 
It will also render a <Greeting />
 * ************************/
// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <Clock />;
//   }
//   return <Toggle />;
// }

  ReactDOM.render(
    // <Clock />,
    // <Toggle />,
    // <Greeting isLoggedIn = {false} />,
    < LoginControl />,
    document.getElementById('root')
  );