// import React from 'react'

// function LoginButton(props) {
//     return (
//       <button onClick = {props.onClick}>
//         Login button
//       </button>
//     )
// }

// export default LoginButton;

import React, { Component } from 'react';

class LoginButton extends Component {
    render() {
        return(
            <button onClick = { this.props.onClick }>
                Login Button
            </button>
        );
    }
}

export default LoginButton;