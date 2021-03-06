function Boxresult(props) {
  const selectedboxes = {
    backgroundColor: "#141414",
    border: props.item.on ? "1px solid black" : "",
    padding: props.item.on ? "7px" : "",
    borderRadius: "5px",
    margin: props.item.on ? "5px" : "",
    marginLeft: props.item.on ? "7px" : "",
    color: "#ffea82",
    fontSize: "0.9em"
}
  return (
    <div style={selectedboxes}>
      {props.item.on && props.item.title}
    </div>
  )
}

export default Boxresult