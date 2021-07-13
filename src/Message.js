import React from "react";
import './Message.sass';

class Message extends React.Component {
  render() {
    return <span className="Message">{ this.props.text }</span>
  }
}

// function Message(props) {
//   return <span className="Message">{ props.text2 }</span>;
// }

export default Message;
