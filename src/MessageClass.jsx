import React from 'react';

export class MessageClass extends React.Component {
  render() {
    return (
      <div className="message" key={ this.props.index }>
      <i className="message_author">{ this.props.author }:</i>
      <p>{ this.props.text }</p>
    </div>
    );
  }
}
