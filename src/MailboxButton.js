import React, { Component } from 'react';
import Mailbox from './Mailbox';


 /* below is not working !!*/
 class MailboxButton extends Component {
  
  constructor(props) {
    super(props);
    // this.state = {isToggleOn: true, showReply: false, msg: ['React', 'Re: React', 'Re:Re: React'] };
    this.state = {isToggleOn: true, showReply: false, msg: this.props.unreadMessages, msgCount: this.props.unreadMessages.length };
    this.handlonClick = this.handlonClick.bind(this);
    this.showonClick = this.showonClick.bind(this);
    this.msgCountfunc = this.msgCountfunc.bind(this);
  };

  handlonClick() {
    // this.setState(state => ({isToggleOn : !this.state.isToggleOn, showReply: !this.state.showReply }));
    this.setState(state => ({isToggleOn : !state.isToggleOn }));
  }
  showonClick() {
    this.setState(state => ({showReply: !state.showReply }));
  }
  
  msgCountfunc() {
    this.setState(state => ({msgCount: state.msgCount--}));
  }
 
  render() {
    const { onPress, children } = this.props;
    return (
    <div>
     <button onClick= { this.handlonClick } >
       {this.state.isToggleOn ? 'ON' : 'OFF'}
     </button>
     <p></p>
     <div>
            <button onClick = {this.msgCountfunc} > CLICK for delete msg: it's count </button>
            <h3>{this.state.msg}</h3>
            <h3>{this.state.msgCount}</h3>
            <div>
              {this.state.msg.map(m =>(
                <p>{m.msg}</p>
            ))} 
            </div>
     </div>      
    </div>   
    );
  } 
}


export default MailboxButton;
