import React, { Component } from 'react'
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';
import Greeting from './Greeting';
import Mailbox from './Mailbox';
import MailboxButton from './MailboxButton';

class LoginControl extends Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = { isLoggedIn: false };
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }

    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button, buttonM;
      const messages = ['React ', 'Re: React ', 'Re:Re: React '];

      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      buttonM = <MailboxButton unreadMessages={messages}/>;
      return (
        <div>
          <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
          </div>
          <div>
            <Mailbox unreadMessages={messages}/>
            {buttonM}
          </div> 
        </div>
      );
    }
  }
  

export default LoginControl;
