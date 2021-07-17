function Message(props) {
  return (
    <div className="message" key={ props.index }>
      <i className="message_mg">{ props.author }:</i>
      <p>{ props.text }</p>
    </div>
  )
}

export default Message
