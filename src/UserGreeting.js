import React from 'react';

// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

function UserGreeting(props) {
// function UserGreeting() {
  const loginStatus = props.isLoggedIn;
  let indexLogin2; //working?
  // var indexLogin2;

    if( loginStatus) {
      indexLogin2 = 'true';
    } else {
      indexLogin2 = 'false';
    }
    
    return <h1>Welcome back! Since Login state : { indexLogin2 }</h1>;
  }
 
  export default UserGreeting;

// import React from 'react';
// function UserGreeting(props) {
// // function UserGreeting() {
//   var loginStatus = props.isLoggedIn;

//     return <h1>Welcome back! Since Login state : { loginStatus }</h1>;
//   }
 
//   export default UserGreeting;