// import React from 'react';

// function LogoutButton(props) {
//     return (
//         <button onClick = { props.onClick }>
//             Logout Button
//         </button>
//     );
// }
// export default LogoutButton;

import React, { Component } from 'react'

class LogoutButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Logout button
      </button>
    )
  }
}

export default LogoutButton;
