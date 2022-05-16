const CurrentTime = (props) => {
  console.log(props);

    return (
      <div>
        <h2>It is {props.time}</h2>
      </div>
    )
}

export default CurrentTime