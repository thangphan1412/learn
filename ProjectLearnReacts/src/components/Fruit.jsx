export default function Fruit(props) {
  return (
    <div>
      <li>
        {console.log(props.name)}
        {props.name} {props.price}
      </li>
    </div>
  );
}
