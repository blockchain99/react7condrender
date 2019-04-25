import React from 'react';
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h3>Hello!</h3>
      {unreadMessages.length > 0 &&
        <h3>
          You have {unreadMessages.length} unread messages.
        </h3>
      }
    </div>
  );
}

export default Mailbox;


/****Below not working  !!! */
// import React, { Component } from 'react';
// import MailboxButton from './MailboxButton_backup';

// class  Mailbox extends Component {

//   constructor(props) {
//     super(props);
//     this.handleonClick = this.handleonClick.bind(this);
//   }
//   handleonClick() {
//     return <MailboxButton unreadMessages={this.props.unreadMessages}/>;
//   }
//   render() {
//     return (
//      <button onClick= { this.handleonClick } >
//        Mailbox button
//      </button>
//     );
//   } 
// }

// export default Mailbox;
