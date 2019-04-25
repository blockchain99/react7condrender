import React from 'react';

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }
  function GuestGreeting(props) {
  // function GuestGreeting() {
    const loginStatus = props.isLoggedIn;
    let indexLogin3;  //not working
    // const indexLogin3; //not working
    // var indexLogin3;  

    if( loginStatus) {
      indexLogin3 = 'true';
    } else {
      indexLogin3 = 'false';
    }
   

    return <h1>Please sign up. Since Login state : { indexLogin3 }</h1>;
  }

  export default GuestGreeting;

// //*** not working as intended! */
// import React from 'react';
//   function GuestGreeting(props) {
//   // function GuestGreeting() {
//     var loginStatus = props.isLoggedIn;
   
//     return <h1>Please sign up. Since Login state : { loginStatus }</h1>;
//   }

//   export default GuestGreeting;