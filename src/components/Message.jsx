function Message(props) {
  const { text, author } = props.message;

  return (
    <div className="message">
      <i className="message_author">{ author }:</i>
      <p>{ text }</p>
    </div>
  );
};

export default Message;
