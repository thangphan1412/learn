function Hello(props) {
  return (
    <h1>
      {props.persons.message} {props.persons.name} {props.persons.seatNumber}
    </h1>
  );
}
export default Hello;
